/* Parsea el CSV de Experiencia y emite src/data/contracts.js */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CSV_PATH = '/Users/carlosprieto/Downloads/Experiencia - Experiencia general.csv';
const OUT_PATH = path.resolve(__dirname, '..', 'src', 'data', 'contracts.js');

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (c === '\r') { /* skip */ }
      else field += c;
    }
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function parseValue(s) {
  if (!s) return 0;
  const digits = s.replace(/[^\d,]/g, '').replace(',00', '').replace(',', '');
  return parseInt(digits, 10) || 0;
}

function titleCase(s) {
  if (!s) return '';
  return s.toLowerCase()
    .split(/\s+/)
    .map(w => {
      if (['de', 'la', 'el', 'y', 'a', 'en', 'del', 'al', 'los', 'las', 'por', 'para', 'con'].includes(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

function cleanObjeto(s) {
  return s.replace(/\s+/g, ' ').trim().replace(/^"+|"+$/g, '');
}

function categorize(objeto) {
  const o = objeto.toUpperCase();
  if (/STREAMING|VIDEOBEAM|AUDIOVISUAL|TRANSMI|EQUIPOS DE VIDEO|AUDIO Y SONIDO|EQUIPOS DE AUDIO/.test(o)) return 'audiovisual';
  if (/CCTV|CAMARA|VIGILANCIA|CIRCUITO DE CAMARAS|EQUIPOS E INSUMOS ELECTRONICOS|ORDEN PUBLICO|CONVIVENCIA Y ORDEN/.test(o)) return 'seguridad';
  if (/COMPUTO|REDES|SOPORTE TECNICO|TECNOLOGIC|TECNOLOGIA|SOFTWARE|SERVIDOR|UPS|MIGRACION DE INFORMACION|MANTENIMIENTO PREVENTIVO|EQUIPOS DE COMPUTO|LICENCIAS ANTIVIRUS/.test(o)) return 'tecnologia';
  if (/PAPELER|CAFETER|ASEO|ELEMENTOS DE OFICINA|ARTICULOS YO ELEMENTOS|ARTICULOS Y\/O ELEMENTOS|ASOCENTRO|FORTALECIMIENTO Y MEJORAMIENTO/.test(o)) return 'suministros';
  if (/APOYO LOG|EVENTO|CONMEMOR|CELEBRACI|ALIMENT|REFRIGERIO|TORNEO|DEPORTI|FUERZA PUBLICA|VICTIMAS|BIENESTAR|RETENIDO/.test(o)) return 'logistica';
  if (/SILLA|MOBILIARI|MENAJE|MUEBLES DE OFICINA|COMPRAVENTA DE SILLAS/.test(o)) return 'mobiliario';
  if (/MEMORIA HISTORICA|HISTORIA Y ANECDOTARIO|BIBLIOTECA|GACETA|TEXTO DE HISTORIA|EDICION E IMPRESION/.test(o)) return 'cultural';
  if (/JUGUETE|VESTUARIO|COFIA|DOTACION|NIÑOS|MADRE|JUVENTUD|MUJERES|CULTURA Y EL PROGRAMA|COLCHONETAS|CONSEJO DE JUVENTUDES/.test(o)) return 'social';
  return 'suministros';
}

function normalizeMunicipio(m) {
  const map = {
    'GACHANCIPA': 'Gachancipá',
    'CHOACHI': 'Choachí',
    'ZIPAQUIRA': 'Zipaquirá',
    'GUATAVITA': 'Guatavita',
    'ZIPACON': 'Zipacón',
    'SOPO': 'Sopó',
    'ASOCENTRO CAJICA': 'Asocentro Cajicá',
    'NEMOCON': 'Nemocón',
    'EL ROSAL': 'El Rosal',
    'GUASCA': 'Guasca',
  };
  return map[m] || titleCase(m);
}

const csv = fs.readFileSync(CSV_PATH, 'utf8');
const rows = parseCSV(csv).slice(1).filter(r => r[0] && r[0].trim());

const contracts = rows.map((r, i) => ({
  id: i + 1,
  objeto: cleanObjeto(r[0]),
  valor: parseValue(r[1]),
  year: parseInt(r[2], 10) || 0,
  acta: r[3] && r[3].trim() ? r[3].trim() : null,
  siaobserva: r[4] && r[4].trim() ? r[4].trim() : null,
  municipio: normalizeMunicipio((r[5] || '').trim()),
  categoria: categorize(r[0]),
}));

const totalValor = contracts.reduce((s, c) => s + c.valor, 0);
const years = [...new Set(contracts.map(c => c.year))].sort();
const munis = [...new Set(contracts.map(c => c.municipio))].sort();

console.error(`Parsed ${contracts.length} contracts, total $${totalValor.toLocaleString()}, ${munis.length} municipios, years ${years.join(', ')}`);

const out = `/* Auto-generado desde CSV. Editar este archivo manualmente. */

export const CATEGORIES = {
  tecnologia:  { label: 'Tecnología y soporte IT',  color: '#60a5fa' },
  audiovisual: { label: 'Audiovisual y streaming',  color: '#a78bfa' },
  seguridad:   { label: 'Seguridad electrónica',    color: '#f87171' },
  suministros: { label: 'Suministros de oficina',   color: '#34d399' },
  logistica:   { label: 'Logística y eventos',      color: '#fbbf24' },
  mobiliario:  { label: 'Mobiliario',               color: '#fb923c' },
  cultural:    { label: 'Cultural y editorial',     color: '#22d3ee' },
  social:      { label: 'Bienestar social y dotación', color: '#f472b6' },
};

export const contracts = ${JSON.stringify(contracts, null, 2)};
`;

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, out);
console.error(`✓ Wrote ${OUT_PATH}`);

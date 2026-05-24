export const STATS = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '3', label: 'Proyectos en producción' },
  { value: 'Full Stack', label: 'Frontend · Backend · DB' },
  { value: 'Deploy', label: 'Vercel · Forge · Render · Neon' },
]

export const SERVICES = [
  {
    id: 'clients',
    icon: '🚀',
    title: 'Clientes',
    line: 'Sistemas a medida con deploy',
  },
  {
    id: 'companies',
    icon: '💼',
    title: 'Empresas',
    line: 'React + APIs en equipo',
  },
  {
    id: 'products',
    icon: '⚡',
    title: 'Productos',
    line: 'De cero a producción',
  },
]

export const STACK_GROUPS = [
  {
    id: 'frontend',
    title: 'Frontend',
    color: 'from-cyan-500/20 to-primary-500/10',
    items: [
      { name: 'React', abbr: '⚛' },
      { name: 'Tailwind', abbr: 'TW' },
      { name: 'JavaScript', abbr: 'JS' },
      { name: 'HTML/CSS', abbr: 'HC' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    color: 'from-red-500/20 to-orange-500/10',
    items: [
      { name: 'Laravel', abbr: 'LV' },
      { name: 'PHP', abbr: 'PHP' },
      { name: 'C#', abbr: 'C#' },
      { name: 'REST API', abbr: 'API' },
    ],
  },
  {
    id: 'data',
    title: 'Datos',
    color: 'from-blue-500/20 to-accent-500/10',
    items: [
      { name: 'PostgreSQL', abbr: 'PG' },
      { name: 'SQL Server', abbr: 'SQL' },
    ],
  },
  {
    id: 'deploy',
    title: 'Deploy & Cloud',
    color: 'from-violet-500/20 to-primary-500/10',
    items: [
      { name: 'Vercel', abbr: 'VC' },
      { name: 'Laravel Forge', abbr: 'FG' },
      { name: 'Render', abbr: 'RN' },
      { name: 'Neon', abbr: 'NE' },
    ],
  },
  {
    id: 'tools',
    title: 'Herramientas',
    color: 'from-accent-500/20 to-primary-500/10',
    items: [
      { name: 'Git', abbr: 'Git' },
      { name: 'Postman', abbr: 'PM' },
      { name: 'Cursor AI', abbr: 'AI' },
    ],
  },
]

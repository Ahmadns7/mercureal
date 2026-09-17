import { Bot, Code2, Palette, Workflow, Globe2, Boxes, Database, Cloud, Sparkles, Layers, Cpu } from 'lucide-react';
export const services = [
  { icon: Globe2, title: 'Web Development', text: 'Fast, accessible web platforms built around your product and audience.' },
  { icon: Bot, title: 'AI Solutions', text: 'Useful AI integrations that help teams think, serve, and move faster.' },
  { icon: Code2, title: 'Software Development', text: 'Reliable systems with clean foundations and room to grow.' },
  { icon: Palette, title: 'UI/UX Design', text: 'Clear interfaces that turn complex workflows into calm experiences.' },
  { icon: Workflow, title: 'Automation', text: 'Connected workflows that remove repetitive work and surface what matters.' },
  { icon: Boxes, title: 'Digital Transformation', text: 'Practical technology roadmaps for how your business operates next.' },
];
export const technologies = [['React', Layers], ['Next.js', Globe2], ['Node.js', Code2], ['Python', Cpu], ['Django', Code2], ['Firebase', Sparkles], ['Supabase', Database], ['APIs', Workflow], ['AI', Bot], ['Automation', Workflow], ['Cloud', Cloud], ['Databases', Database]];
export const projects = [
  { name:'Atlas', category:'AI Business Assistant', text:'A focused workspace for turning internal knowledge into helpful, traceable answers.', tags:['AI workflows','React','API design'], tone:'cyan' },
  { name:'Common Thread', category:'Digital Marketplace', text:'A refined discovery and transaction experience for a growing independent commerce concept.', tags:['Commerce','Design systems','Node.js'], tone:'orange' },
  { name:'Northstar', category:'Business Management Platform', text:'A calm operational view for teams coordinating projects, people, and priorities.', tags:['SaaS','Dashboards','Automation'], tone:'violet' },
];
export const principles = [['Practical technology','Every decision is tied to a real business or user need.'],['Modern engineering','Clean systems, sensible tooling, and a bias toward clarity.'],['Scalable architecture','Foundations that support the next useful chapter of your product.'],['User-centered design','Interfaces shaped around the people who rely on them.'],['AI-assisted innovation','Thoughtful automation where it creates meaningful leverage.'],['Long-term maintainability','Code and systems your team can understand and evolve.']];
export const process = ['Discover','Strategy','Design','Build','Test','Launch'];

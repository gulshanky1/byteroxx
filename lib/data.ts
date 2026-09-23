import type { ComponentType, SVGProps } from 'react'
import {
  Code2,
  Cloud,
  BrainCircuit,
  PenTool,
  ShieldCheck,
  Settings2,
  Search,
  Rocket,
  LifeBuoy,
  Compass,
  Globe,
  HeartPulse,
  GraduationCap,
  Clock,
  Plane,
  TrendingUp,
  Boxes,
  Database,
  Layers,
  Braces,
  Container,
  Cpu,
} from 'lucide-react'

export type Icon = ComponentType<SVGProps<SVGSVGElement>>

export interface Service {
  title: string
  description: string
  icon: Icon
}

export const services: Service[] = [
  {
    title: 'Web & App Development',
    description:
      'Fast, resilient websites and cross-platform apps built on modern frameworks, architected to scale with your business rather than around it.',
    icon: Code2,
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Infrastructure, CI/CD pipelines, and automated deployments that keep your systems fast, observable, and rarely, if ever, paged about at 2am.',
    icon: Cloud,
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Custom models and LLM-powered features that turn the data you already have into decisions, automation, and product you can ship.',
    icon: BrainCircuit,
  },
  {
    title: 'Product & UX Design',
    description:
      'Research-backed interfaces and prototypes that get tested with real users before a single line of production code is written.',
    icon: PenTool,
  },
  {
    title: 'Cybersecurity',
    description:
      'Audits, threat monitoring, and secure-by-design architecture, so growth never has to come at the cost of trust.',
    icon: ShieldCheck,
  },
  {
    title: 'IT Consulting',
    description:
      'A second opinion on your stack, roadmap, and hiring plan from engineers who have shipped the same decisions before.',
    icon: Settings2,
  },
]

export interface Stat {
  value: number
  suffix?: string
  label: string
}

export const stats: Stat[] = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 45, suffix: '+', label: 'Clients worldwide' },
  { value: 8, label: 'Years building' },
  { value: 98, suffix: '%', label: 'Client retention' },
]

export interface ProcessStep {
  title: string
  description: string
  icon: Icon
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Discover',
    description: 'We map your goals, users, and constraints until the real problem is obvious and agreed on.',
    icon: Search,
  },
  {
    title: 'Design',
    description: 'Wireframes and prototypes get tested with real users before a single line of code ships.',
    icon: Compass,
  },
  {
    title: 'Build',
    description: 'Engineers work in focused sprints against a shared roadmap, with progress visible every week.',
    icon: Code2,
  },
  {
    title: 'Launch',
    description: 'Automated pipelines and staged rollouts mean release day looks like any other day.',
    icon: Rocket,
  },
  {
    title: 'Support',
    description: 'We stay on after launch, watching the metrics that matter and iterating as you grow.',
    icon: LifeBuoy,
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Byteroxx felt like an extension of our own team from week one. They shipped our platform redesign two weeks ahead of schedule without cutting a corner.",
    name: 'Renee Castillo',
    role: 'VP of Product',
    company: 'Northwind Goods',
  },
  {
    quote:
      "The recommendation engine they built lifted our conversion rate by 34% in a single quarter. That kind of return changes how a board talks about engineering.",
    name: 'Jonas Kim',
    role: 'CTO',
    company: 'Fintrail',
  },
  {
    quote:
      "Clear communication, sharp engineering, and a team that clearly cared about the outcome and not just the invoice. That combination is rarer than it should be.",
    name: 'Amara Okafor',
    role: 'Founder',
    company: 'Solara Health',
  },
  {
    quote:
      "We arrived with a decade of legacy systems and left with a cloud-native architecture that finally scales the way our customers need it to.",
    name: 'Liam Sutherland',
    role: 'Head of Engineering',
    company: 'Cartway',
  },
]

export interface TechBadge {
  name: string
  icon: Icon
}

export const techStack: TechBadge[] = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Layers },
  { name: 'TypeScript', icon: Braces },
  { name: 'Node.js', icon: Cpu },
  { name: 'Python', icon: Code2 },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Container },
  { name: 'Kubernetes', icon: Boxes },
  { name: 'GraphQL', icon: Braces },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'TensorFlow', icon: BrainCircuit },
]

export interface Value {
  title: string
  description: string
  icon: Icon
}

export const values: Value[] = [
  {
    title: 'Innovation first',
    description: 'We chase what solves the problem best, even when that means retiring a tool we championed last year.',
    icon: BrainCircuit,
  },
  {
    title: 'Radical transparency',
    description: 'No black boxes. You always know what we are building, why, and exactly how it is going.',
    icon: ShieldCheck,
  },
  {
    title: 'Built to last',
    description: 'We write systems meant to outlive trends, documented well enough that the next engineer thanks us.',
    icon: Layers,
  },
  {
    title: 'Obsessed with outcomes',
    description: 'Tickets closed is not a metric we report. The number that moved for your business is.',
    icon: TrendingUp,
  },
  {
    title: 'One team',
    description: 'Your goals become our goals for the length of the engagement. We collaborate like colleagues.',
    icon: Globe,
  },
  {
    title: 'Move with purpose',
    description: 'Speed matters, but never at the cost of the quality or trust your users have placed in you.',
    icon: Rocket,
  },
]

export interface Milestone {
  year: string
  description: string
}

export const timeline: Milestone[] = [
  {
    year: '2018',
    description: 'Byteroxx is founded by a small team of engineers tired of vendors that felt like vendors.',
  },
  {
    year: '2020',
    description: 'We pass 25 active clients and open a dedicated product design studio.',
  },
  {
    year: '2022',
    description: 'Our managed cloud practice launches, cutting infrastructure costs for clients by 30% on average.',
  },
  {
    year: '2024',
    description: 'The AI & Data team ships its 50th production machine learning system.',
  },
  {
    year: '2026',
    description: 'Byteroxx now partners with teams across 15+ countries, still building with day-one care.',
  },
]

export interface TeamMember {
  name: string
  role: string
  initials: string
}

export const team: TeamMember[] = [
  { name: 'Aarav Mehta', role: 'Co-Founder & CEO', initials: 'AM' },
  { name: 'Elena Kowalski', role: 'Co-Founder & CTO', initials: 'EK' },
  { name: 'Marcus Chen', role: 'Head of Engineering', initials: 'MC' },
  { name: 'Isla Fontaine', role: 'Head of Design', initials: 'IF' },
  { name: 'Noah Bishop', role: 'Head of AI & Data', initials: 'NB' },
  { name: 'Tariq Osman', role: 'VP of Client Success', initials: 'TO' },
]

export interface Perk {
  title: string
  description: string
  icon: Icon
}

export const perks: Perk[] = [
  {
    title: 'Remote-first, always',
    description: 'Work from anywhere. We have been distributed since day one and built our culture around it.',
    icon: Globe,
  },
  {
    title: 'Health & wellness',
    description: 'Comprehensive coverage plus a wellness stipend, because good work starts with taking care of yourself.',
    icon: HeartPulse,
  },
  {
    title: 'Learning budget',
    description: 'An annual budget for courses, conferences, and certifications, spend it on whatever helps you grow.',
    icon: GraduationCap,
  },
  {
    title: 'Flexible hours',
    description: 'We care about outcomes, not hours logged. Structure your day around how you do your best work.',
    icon: Clock,
  },
  {
    title: 'Team retreats',
    description: 'The whole team flies out together at least once a year to build real relationships, not just threads.',
    icon: Plane,
  },
  {
    title: 'Real equity & growth',
    description: 'Meaningful equity and a clear path to grow your title, your scope, and your impact.',
    icon: TrendingUp,
  },
]

export type Department = 'Engineering' | 'Design' | 'AI & Data' | 'Delivery' | 'Sales'

export interface JobOpening {
  title: string
  department: Department
  location: string
  type: string
}

export const jobs: JobOpening[] = [
  { title: 'Senior Frontend Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'Backend Engineer, Node.js', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'DevOps / Platform Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'QA Automation Engineer', department: 'Engineering', location: 'Remote', type: 'Contract' },
  { title: 'Product Designer', department: 'Design', location: 'Remote', type: 'Full-time' },
  { title: 'Machine Learning Engineer', department: 'AI & Data', location: 'Remote', type: 'Full-time' },
  { title: 'Technical Project Manager', department: 'Delivery', location: 'Remote', type: 'Full-time' },
  { title: 'Business Development Representative', department: 'Sales', location: 'Remote', type: 'Full-time' },
]

export interface HiringStep {
  title: string
  description: string
}

export const hiringProcess: HiringStep[] = [
  { title: 'Apply', description: 'Send your resume and a note on what you want to work on next.' },
  { title: 'Intro call', description: 'A 30-minute conversation about your background and what we are building.' },
  { title: 'Skills interview', description: 'A practical exercise close to the actual work, reviewed by the team.' },
  { title: 'Offer', description: 'We move fast once we know it is a fit, usually within a week of your final interview.' },
]

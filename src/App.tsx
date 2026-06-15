import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Mail,
  Globe,
  GraduationCap,
  Code2,
  Database,
  ArrowRight,
  Briefcase,
  Languages,
  Sparkles,
} from "lucide-react";
import heroBrush from "./assets/hero-brush.jpg";
import profileImage from "./assets/1.png";
import emailjs from "@emailjs/browser";



const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full bg-gradient-brand px-5 py-3 shadow-brand sm:px-8">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-primary font-black">
              N
            </span>
            <span className="text-lg font-bold tracking-tight">Welcome to my Portfolio!</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`text-sm font-medium transition-opacity ${
                  active === n.id ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-white p-4 shadow-soft md:hidden">
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <img
          src={heroBrush}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
          width={1600}
          height={1200}
        />
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Software Engineer
            </p>
            <h1 className="mt-3 text-4xl font-black leading-[1.05] sm:text-6xl">
              Hello, I'm <br />
              <span className="text-gradient-brand">Naveen Kumar Ippili</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Aspiring software engineer building reliable systems with Java, Python and MySQL — focused on clean code, problem solving, and shipping real things.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:-translate-y-0.5"
              >
                See My Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
              >
                Hire Me
              </a>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 -z-10 mx-auto h-full w-[88%] rounded-[40%] bg-gradient-brand opacity-15 blur-2xl" />
            <img
              src={profileImage}
              alt="Naveen Kumar Ippili"
              width={1024}
              height={1280}
              className="mx-auto w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A bit about me">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <p className="text-muted-foreground">
              I'm a recent B.Tech graduate in Electronics & Communications from RGUKT Srikakulam, now channeling that engineering mindset into software. I love turning messy problems into clean, well-tested code — whether it's a database-driven booking system or a small CLI tool.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              <InfoRow label="Name" value="Naveen Kumar Ippili" />
              <InfoRow label="Email" value="naveenkumarippili3@gmail.com" />
              <InfoRow label="Phone" value="+91 89195 48831" />
              <InfoRow label="Location" value="Palasa, Srikakulam, AP, India" />
              <InfoRow label="Degree" value="B.Tech ECE — GPA 8.08 / 10" />
              <InfoRow label="Availability" value="Open to full-time roles" />
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <StatCard value="8.08" label="B.Tech GPA" />
            <StatCard value="2+" label="Projects Built" />
            <StatCard value="5+" label="Languages & Tools" />
            <StatCard value="3" label="Spoken Languages" />
          </div>
        </div>
      </Section>

      {/* RESUME */}
      <Section id="resume" eyebrow="Resume" title="Education & journey" tinted>
        <div className="grid gap-8 md:grid-cols-2">
          <TimelineColumn
            icon={<GraduationCap size={20} />}
            heading="Education"
            items={[
              {
                period: "Aug 2019 – Apr 2023",
                title: "B.Tech, Electronics & Communications",
                org: "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
                desc: "Cumulative GPA of 8.08/10. Coursework spanning programming, data structures, and systems design.",
              },
              {
                period: "Aug 2017 – Apr 2019",
                title: "Pre-University Course (MPC)",
                org: "RGUKT, Srikakulam",
                desc: "Foundation in Mathematics, Physics and Chemistry. CGPA 7.0.",
              },
              {
                period: "March 2017",
                title: "Secondary School Certificate",
                org: "St. Francis de Sales High School, Palasa",
                desc: "Graduated with CGPA 9.3.",
              },
            ]}
          />
          <TimelineColumn
            icon={<Briefcase size={20} />}
            heading="Focus Areas"
            items={[
               {
                period: "Now",
                title: "Web & App Development",
                org: "Frontend / Backend",
                desc: "Learning modern web stacks and contributing to open-source projects on GitHub.",
              },
              {
                period: "Now",
                title: "Backend & Database Development",
                org: "Java • Python • MySQL",
                desc: "Designing normalized schemas, writing JDBC/Connector code and shipping CRUD-driven applications.",
              },
              {
                period: "Now",
                title: "Software Quality",
                org: "Manual Testing • Git",
                desc: "Hands-on with functional testing, validation flows and version control across small teams.",
              },
             
            ]}
          />
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="What I work with">
        <div className="grid gap-6 md:grid-cols-2">
          <SkillBars
            heading="Technical"
            icon={<Code2 size={18} />}
            skills={[
              { name: "Java", value: 88 },
              { name: "Python", value: 85 },
              { name: "C++", value: 78 },
              { name: "HTML & CSS", value: 90 },
              { name: "Java Script", value: 85 },
              { name: "React", value: 84 },
              
            ]}
          />
          <SkillBars
            heading="Databases & Tools"
            icon={<Database size={18} />}
            skills={[
              { name: "MySQL", value: 86 },
              { name: "JDBC", value: 80 },
              { name: "MySQL Workbench", value: 82 },
              { name: "VS Code", value: 90 },
              { name: "Linux / Windows", value: 75 },
              { name: "Git & Version Control", value: 80 },
            ]}
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <TagCard
            icon={<Sparkles size={18} />}
            title="Soft Skills"
            tags={["Management", "Creativity", "Analytical", "Attention to Detail", "Adaptability"]}
          />
          <TagCard
            icon={<Languages size={18} />}
            title="Languages"
            tags={["English — Fluent", "Telugu — Fluent", "Hindi — Proficient"]}
          />
          <TagCard
            icon={<Sparkles size={18} />}
            title="Interests"
            tags={["Web Dev", "App Dev", "Open Source", "New Languages"]}
          />
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Portfolio" title="Selected projects" tinted>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Railway Ticket Booking System"
            stack={["Python", "MySQL"]}
            points={[
              "End-to-end booking platform managing train schedules, passengers and reservation workflows.",
              "CRUD operations via Python + MySQL Connector with real-time record updates.",
              "Normalized relational schema with foreign keys for integrity.",
              "Ticket booking, cancellation and reporting with friendly console menus.",
              "Robust validation and error handling for inputs and DB connections.",
            ]}
          />
          <ProjectCard
            title="Banking System"
            stack={["Java", "JDBC", "MySQL"]}
            points={[
              "Console banking app: account creation, deposits, withdrawals, balance & history.",
              "Secure JDBC connectivity to MySQL for persistent storage.",
              "Relational schema modelling customers and transactions.",
              "Input validation and error handling for a polished experience.",
              "Functional testing to prevent overdrafts and duplicate transactions.",
            ]}
          />
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build something">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-brand p-8 text-white shadow-brand">
            <h3 className="text-2xl font-bold">Personal Info</h3>
            <p className="mt-2 text-white/85">
              Open to full-time software engineering roles. I respond within a day.
            </p>
            <div className="mt-7 grid gap-5">
              <ContactRow icon={<Phone size={18} />} label="Call" value="+91 89195 48831" />
              <ContactRow icon={<Mail size={18} />} label="Email" value="naveenkumarippili3@gmail.com" />
              <ContactRow icon={<MapPin size={18} />} label="Location" value="Palasa, Srikakulam, AP, India" />
              <ContactRow icon={<Globe size={18} />} label="LinkedIn" value="linkedin.com/in/naveen-kumar-ippili-362067250/" />
            </div>
          </div>

          <form
            onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  try {
    await emailjs.sendForm(
      "service_zyoci75",
      "template_oi6b7vg",
      form,
      "jvlkuNTClgktUZysR"
    );

    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
}}
            className="rounded-3xl bg-white p-8 shadow-soft"
          >
            <h3 className="text-2xl font-bold">Send a message</h3>
            <div className="mt-5 grid gap-4">
              <Field name="name" label="Your name" placeholder="Jane Doe" />
              <Field name="email" type="email" label="Email" placeholder="you@example.com" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the role or project…"
                  className="mt-1 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:-translate-y-0.5"
              >
                Send message <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Naveen Kumar Ippili. Crafted with care.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* --------------------------- Reusable building blocks --------------------------- */

function Section({
  id,
  eyebrow,
  title,
  children,
  tinted,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 sm:py-28 ${tinted ? "bg-secondary/60" : ""}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            <span className="text-gradient-brand">{title.split(" ")[0]}</span>{" "}
            {title.split(" ").slice(1).join(" ")}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="grid grid-cols-[110px_minmax(0,1fr)] items-baseline gap-3 border-b border-border/60 pb-2 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="truncate text-sm text-foreground">{value}</span>
    </li>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 text-center shadow-soft">
      <div className="text-4xl font-black text-gradient-brand">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function TimelineColumn({
  icon,
  heading,
  items,
}: {
  icon: React.ReactNode;
  heading: string;
  items: { period: string; title: string; org: string; desc: string }[];
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-white shadow-brand">
          {icon}
        </span>
        <h3 className="text-xl font-bold">{heading}</h3>
      </div>
      <div className="relative space-y-5 border-l-2 border-dashed border-primary/30 pl-6">
        {items.map((it) => (
          <div key={it.title} className="relative rounded-2xl bg-white p-6 shadow-soft">
            <span className="absolute -left-[33px] top-7 h-3 w-3 rounded-full bg-gradient-brand ring-4 ring-background" />
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">{it.period}</p>
            <h4 className="mt-1 text-lg font-bold">{it.title}</h4>
            <p className="text-sm text-muted-foreground">{it.org}</p>
            <p className="mt-2 text-sm text-foreground/80">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillBars({
  heading,
  icon,
  skills,
}: {
  heading: string;
  icon: React.ReactNode;
  skills: { name: string; value: number }[];
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-soft">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white">{icon}</span>
        <h3 className="text-lg font-bold">{heading}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground">{s.value}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-gradient-brand transition-all"
                style={{ width: `${s.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TagCard({ icon, title, tags }: { icon: React.ReactNode; title: string; tags: string[] }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <div className="mb-3 flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-primary">{icon}</span>
        <h3 className="text-base font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  stack,
  points,
}: {
  title: string;
  stack: string[];
  points: string[];
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-brand">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-10 transition-transform group-hover:scale-150" />
      <div className="relative">
        <div className="mb-3 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary"
            >
              {s}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <ul className="mt-4 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex gap-2 text-sm text-foreground/80">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/70">{label}</p>
        <p className="truncate text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1 w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}


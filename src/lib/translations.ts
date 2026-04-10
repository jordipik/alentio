export type Language = "es" | "ca" | "en";

export type Translation = {
    langLabel: string;
    nav: {
        about: string;
        services: string;
        process: string;
        sectors: string;
        contact: string;
    };
    cta: {
        talk: string;
        services: string;
        contact: string;
    };
    hero: {
        claim: string;
        subtitle: string;
    };
    about: {
        eyebrow: string;
        title: string;
        body: string;
        points: string[];
    };
    services: {
        eyebrow: string;
        title: string;
        items: Array<{ title: string; description: string }>;
    };
    process: {
        eyebrow: string;
        title: string;
        steps: string[];
        footer: string;
    };
    philosophy: {
        eyebrow: string;
        title: string;
        not: string[];
        yes: string[];
    };
    sectors: {
        eyebrow: string;
        title: string;
        intro: string;
        items: string[];
    };
    midCta: {
        text: string;
    };
    contact: {
        eyebrow: string;
        title: string;
        intro: string;
        emailLabel: string;
        locationsLabel: string;
        locations: string[];
        form: {
            name: string;
            company: string;
            email: string;
            message: string;
            submit: string;
        };
    };
    footer: {
        rights: string;
    };
};

export const translations: Record<Language, Translation> = {
    es: {
        langLabel: "Idioma",
        nav: {
            about: "Quiénes somos",
            services: "Servicios",
            process: "Cómo trabajamos",
            sectors: "Sectores",
            contact: "Contacto",
        },
        cta: {
            talk: "Hablemos",
            services: "Ver servicios",
            contact: "Contactar",
        },
        hero: {
            claim: "Innovación real para empresas de verdad",
            subtitle:
                "Acompañamos a empresas que quieren innovar con sentido común, diseñando y dirigiendo proyectos tecnológicos reales, eficientes y comprensibles.",
        },
        about: {
            eyebrow: "Quiénes somos",
            title: "Consultoría cercana de innovación aplicada",
            body:
                "ALENTIO es un despacho-taller de innovación: cercano, práctico y orientado a resultados. Acompañamos, orientamos y ejecutamos para bajar las ideas a tierra y convertirlas en proyectos viables.",
            points: [
                "Pensamos en pequeño para construir en grande",
                "Priorizamos quick wins que generan valor desde el inicio",
                "Buscamos soluciones claras, sin complicar a tu equipo",
            ],
        },
        services: {
            eyebrow: "Servicios",
            title: "Capacidad real para diseñar y ejecutar",
            items: [
                {
                    title: "Consultoría de innovación",
                    description:
                        "Definimos una hoja de ruta realista para innovar con foco en impacto, viabilidad y retorno.",
                },
                {
                    title: "Dirección de proyectos tecnológicos",
                    description:
                        "Coordinamos equipos, proveedores y decisiones clave para llevar cada proyecto del plan a la implantación.",
                },
                {
                    title: "IA y digitalización de procesos",
                    description:
                        "Identificamos dónde automatizar y aplicar IA de forma útil, comprensible y alineada con tu operación.",
                },
                {
                    title: "IoT y gemelos digitales",
                    description:
                        "Conectamos datos y procesos para tomar mejores decisiones en entornos productivos y operativos.",
                },
                {
                    title: "Diseño tecnológico",
                    description:
                        "Diseñamos soluciones a medida, escalables y sostenibles, con coste controlado y visión a largo plazo.",
                },
            ],
        },
        process: {
            eyebrow: "Cómo trabajamos",
            title: "Método claro, iterativo y con riesgo controlado",
            steps: [
                "Escuchamos",
                "Detectamos oportunidades",
                "Diseñamos una solución realista",
                "Buscamos la tecnología y los partners adecuados",
                "Implementamos paso a paso",
                "Validamos, mejoramos y escalamos",
            ],
            footer:
                "Trabajamos con ciclos cortos, decisiones claras y máxima comprensión para tu equipo.",
        },
        philosophy: {
            eyebrow: "Nuestra filosofía",
            title: "Pies en el suelo, resultados en marcha",
            not: [
                "No vendemos humo ni promesas vacías",
                "No proponemos grandes locuras fuera de contexto",
                "No complicamos lo que puede ser sencillo",
                "No imponemos soluciones incomprensibles",
            ],
            yes: [
                "Sí trabajamos desde la realidad de tu empresa",
                "Sí buscamos máxima eficiencia con coste controlado",
                "Sí innovamos desde lo pequeño y escalable",
                "Sí acompañamos de la idea a la implantación",
            ],
        },
        sectors: {
            eyebrow: "Ámbitos de trabajo",
            title: "Donde podemos aportar valor de forma inmediata",
            intro:
                "Apoyamos proyectos en empresas que quieren digitalizar y mejorar sin perder foco operativo.",
            items: [
                "Industria",
                "Operaciones",
                "Procesos internos",
                "Sostenibilidad",
                "Energía",
                "Entornos productivos",
                "Digitalización práctica",
            ],
        },
        midCta: {
            text: "Las mejores innovaciones no siempre son las más grandes. Son las que funcionan.",
        },
        contact: {
            eyebrow: "Contacto",
            title: "Hablemos de tu próximo paso",
            intro:
                "Si quieres explorar una oportunidad concreta, te ayudamos a convertirla en un plan claro y ejecutable.",
            emailLabel: "Email",
            locationsLabel: "Ubicaciones",
            locations: ["Molins de Rei", "Lleida", "Cardedeu"],
            form: {
                name: "Nombre",
                company: "Empresa",
                email: "Email",
                message: "Mensaje",
                submit: "Enviar mensaje",
            },
        },
        footer: {
            rights: "Todos los derechos reservados.",
        },
    },
    ca: {
        langLabel: "Idioma",
        nav: {
            about: "Qui som",
            services: "Serveis",
            process: "Com treballem",
            sectors: "Sectors",
            contact: "Contacte",
        },
        cta: {
            talk: "Parlem",
            services: "Veure serveis",
            contact: "Contactar",
        },
        hero: {
            claim: "Innovació real per a empreses de veritat",
            subtitle:
                "Acompanyem empreses que volen innovar amb sentit comú, dissenyant i dirigint projectes tecnològics reals, eficients i comprensibles.",
        },
        about: {
            eyebrow: "Qui som",
            title: "Consultoria propera d'innovació aplicada",
            body:
                "ALENTIO és un despatx-taller d'innovació: proper, pràctic i orientat a resultats. Acompanyem, orientem i executem per aterrar idees i convertir-les en projectes viables.",
            points: [
                "Pensem en petit per construir en gran",
                "Prioritzem quick wins que generen valor des del primer moment",
                "Busquem solucions clares, sense complicar el teu equip",
            ],
        },
        services: {
            eyebrow: "Serveis",
            title: "Capacitat real per dissenyar i executar",
            items: [
                {
                    title: "Consultoria d'innovació",
                    description:
                        "Definim un full de ruta realista per innovar amb focus en impacte, viabilitat i retorn.",
                },
                {
                    title: "Direcció de projectes tecnològics",
                    description:
                        "Coordinem equips, proveïdors i decisions clau per portar cada projecte del pla a la implantació.",
                },
                {
                    title: "IA i digitalització de processos",
                    description:
                        "Identifiquem on automatitzar i aplicar IA de manera útil, comprensible i alineada amb l'operativa.",
                },
                {
                    title: "IoT i bessons digitals",
                    description:
                        "Connectem dades i processos per prendre millors decisions en entorns productius i operatius.",
                },
                {
                    title: "Disseny tecnològic",
                    description:
                        "Dissenyem solucions a mida, escalables i sostenibles, amb cost controlat i visió a llarg termini.",
                },
            ],
        },
        process: {
            eyebrow: "Com treballem",
            title: "Mètode clar, iteratiu i amb risc controlat",
            steps: [
                "Escoltem",
                "Detectem oportunitats",
                "Dissenyem una solució realista",
                "Busquem la tecnologia i els partners adequats",
                "Implementem pas a pas",
                "Validem, millorem i escalem",
            ],
            footer:
                "Treballem amb cicles curts, decisions clares i màxima comprensió per al teu equip.",
        },
        philosophy: {
            eyebrow: "La nostra filosofia",
            title: "Peus a terra, resultats en marxa",
            not: [
                "No venem fum ni promeses buides",
                "No proposem grans bogeries fora de context",
                "No compliquem allò que pot ser senzill",
                "No imposem solucions incomprensibles",
            ],
            yes: [
                "Sí que treballem des de la realitat de la teva empresa",
                "Sí que busquem màxima eficiència amb cost controlat",
                "Sí que innovem des del que és petit i escalable",
                "Sí que acompanyem des de la idea fins a la implantació",
            ],
        },
        sectors: {
            eyebrow: "Àmbits de treball",
            title: "On podem aportar valor de manera immediata",
            intro:
                "Donem suport a projectes en empreses que volen digitalitzar i millorar sense perdre el focus operatiu.",
            items: [
                "Indústria",
                "Operacions",
                "Processos interns",
                "Sostenibilitat",
                "Energia",
                "Entorns productius",
                "Digitalització pràctica",
            ],
        },
        midCta: {
            text: "Les millors innovacions no sempre són les més grans. Són les que funcionen.",
        },
        contact: {
            eyebrow: "Contacte",
            title: "Parlem del teu següent pas",
            intro:
                "Si vols explorar una oportunitat concreta, t'ajudem a convertir-la en un pla clar i executable.",
            emailLabel: "Email",
            locationsLabel: "Ubicacions",
            locations: ["Molins de Rei", "Lleida", "Cardedeu"],
            form: {
                name: "Nom",
                company: "Empresa",
                email: "Email",
                message: "Missatge",
                submit: "Enviar missatge",
            },
        },
        footer: {
            rights: "Tots els drets reservats.",
        },
    },
    en: {
        langLabel: "Language",
        nav: {
            about: "About",
            services: "Services",
            process: "How we work",
            sectors: "Sectors",
            contact: "Contact",
        },
        cta: {
            talk: "Let's talk",
            services: "View services",
            contact: "Contact",
        },
        hero: {
            claim: "Real innovation for real businesses",
            subtitle:
                "We help companies innovate with common sense by designing and leading technology projects that are practical, efficient, and easy to understand.",
        },
        about: {
            eyebrow: "About",
            title: "A close, practical applied innovation consultancy",
            body:
                "ALENTIO is an innovation workshop-consultancy: close, practical, and outcome-driven. We guide, support, and execute to turn ideas into viable projects.",
            points: [
                "We think small to build big",
                "We prioritize quick wins that create value early",
                "We find clear solutions without overcomplicating your team",
            ],
        },
        services: {
            eyebrow: "Services",
            title: "Real execution capability, not theory",
            items: [
                {
                    title: "Innovation consulting",
                    description:
                        "We shape a realistic innovation roadmap focused on impact, viability, and return.",
                },
                {
                    title: "Technology project leadership",
                    description:
                        "We coordinate teams, vendors, and key decisions to move projects from plan to implementation.",
                },
                {
                    title: "AI and process digitalization",
                    description:
                        "We identify where automation and AI can drive useful improvements aligned with your operations.",
                },
                {
                    title: "IoT and digital twins",
                    description:
                        "We connect data and operations to improve decisions in production and operational environments.",
                },
                {
                    title: "Technology design",
                    description:
                        "We design tailored solutions that are scalable, sustainable, and cost-aware.",
                },
            ],
        },
        process: {
            eyebrow: "How we work",
            title: "Clear, iterative process with controlled risk",
            steps: [
                "We listen",
                "We detect opportunities",
                "We design a realistic solution",
                "We identify the right technology and partners",
                "We implement step by step",
                "We validate, improve, and scale",
            ],
            footer:
                "We work in short cycles with clear decisions and full client understanding.",
        },
        philosophy: {
            eyebrow: "Our mindset",
            title: "Grounded thinking, practical outcomes",
            not: [
                "We do not sell hype or empty promises",
                "We do not propose disconnected big-bang ideas",
                "We do not make simple things unnecessarily complex",
                "We do not impose solutions people cannot understand",
            ],
            yes: [
                "We work from each company's real context",
                "We optimize for efficiency with controlled cost",
                "We innovate from small, scalable steps",
                "We accompany clients from idea to implementation",
            ],
        },
        sectors: {
            eyebrow: "Project environments",
            title: "Where we can create immediate value",
            intro:
                "We support companies that want practical digitalization without losing operational focus.",
            items: [
                "Industry",
                "Operations",
                "Internal processes",
                "Sustainability",
                "Energy",
                "Production environments",
                "Practical digitalization",
            ],
        },
        midCta: {
            text: "The best innovations are not always the biggest ones. They are the ones that work.",
        },
        contact: {
            eyebrow: "Contact",
            title: "Let's discuss your next step",
            intro:
                "If you want to explore a concrete opportunity, we can help you turn it into a clear and executable plan.",
            emailLabel: "Email",
            locationsLabel: "Locations",
            locations: ["Molins de Rei", "Lleida", "Cardedeu"],
            form: {
                name: "Name",
                company: "Company",
                email: "Email",
                message: "Message",
                submit: "Send message",
            },
        },
        footer: {
            rights: "All rights reserved.",
        },
    },
};

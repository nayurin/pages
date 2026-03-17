export const en = {
  translation: {
    navbar: {
      home: 'Home',
      education: 'Education',
      experience: 'Experiences',
      skills: 'Skills'
    },
    personal: {
      info: 'Personal Informations',
      name: 'Ruichen Zhang',
      title: 'QA Engineer, Software Development Engineer in Testing',
      email: 'nayurin@outlook.com',
      location: 'Hangzhou, China',
      summary: 'SaaS & cyber security Test Development Engineer specializing in end-to-end automation, CI/CD pipeline optimization, and protocol-level validation for scalable cloud infrastructure.',
      skills: 'Testing, Cyber Security, Automation, CI/CD, JavaScript, Networking, Cloud Native',
      skills_post: 'Prefer well-defined problems, proficient in abstraction and modeling, and possess critical thinking skills.'
    },
    education: [
      {
        id: 1,
        avatar: 'avatar_ustb.png',
        school: 'University of Science and Technology, Beijing',
        degree: 'Information Security - Bachelor',
        period: '2006 - 2010',
        description: 'Major Courses: Computer Organization and Principles, Computer Networking, Data Structures, Information Theory, Foundations of Cryptography, etc.'
      }
    ],
    experience: [
      {
        id: 1,
        organization: 'Chaitin',
        role: 'QA Engineer',
        period: '2021 - 2024',
        description: 'Led the testing on HIDS platform. Architected the design and implementation of auto-deployable test infrastructure and drove environment standardization initiatives. Managed quarterly and annual key results for the team.',
        keywords: 'Testing infrastructure; OKR Alignment; HIDS solution'
      },
      {
        id: 2,
        organization: 'ShuiAn',
        role: 'Software Development Engineer in Testing',
        period: '2020 - 2021',
        description: 'Led functional testing of a SaaS-based tax risk management solution. Implemented and maintained automated testing frameworks to validate core product workflows.',
        keywords: 'Functional testing; Automated testing frameworks implementation; SaaS-based tax risk management solution'
      },
      {
        id: 3,
        organization: 'Utry',
        role: 'Software Development Engineer in Testing',
        period: '2015 - 2019',
        description: 'Maintained deployment and operations scripts for a VoIP softswitch platform. Maintained CI/CD pipelines for daily project workflows. Managed release version control for product deliverables.',
        keywords: 'CI/CD pipelines; Scripts for deployment and operations; Version control for product releases; VoIP softswitch'
      },
      {
        id: 4,
        organization: 'H3C',
        role: 'QA Engineer',
        period: '2012 - 2015',
        description: 'Responsible for functional testing of data center switch system software. Primarily focused on integration and system testing for Layer 4/Layer 7 network protocols and security-related features.',
        keywords: 'Black-box Testing; Integration testing; L3 switch'
      }
    ],
    skills: [
      {
        category: 'Computing & Computer',
        items: [
          {
            name: 'OS',
            rating: 2,
            description: {
              1: 'Understands fundamental #OS concepts*processes, threads, services, file system, memory management, user privilege#, can perform #basic command-line operations*file manipulation, permission settings, simple Shell or PS scripting#, and troubleshoots common system errors.',
              2: 'Capable of independently configuring development environments, interpreting #system logs*journalctl, dmesg#, identifying #basic performance issues*CPU spikes#, and using debugging tools.',
              3: 'Designs and optimizes #system-level tasks*e.g., automation scripts, resource monitoring#, understands system calls and process scheduling, resolves #mid-complexity problems*deadlock analysis, memory leaks#, and works proficiently with #containerization*Docker, Linux namespaces#.',
              4: 'Leads OS-level #performance tuning*kernel parameter optimization, I/O scheduling#, deep-dives into #complex failures*kernel panics#, and has hands-on experience with kernel module development or custom OS design.',
              5: 'Makes #original contributions*e.g., upstream kernel patches, patents# to OS development, pioneers high-reliability architectures, publishes industry standards or technical whitepapers.'
            }
          },
          {
            name: 'Networking',
            rating: 3,
            description: {
              1: 'Understands fundamental #networking concepts*IP addressing, DNS, TCP/UDP models#, uses basic #CLI tools*ping, traceroute# for connectivity testing.',
              2: 'Independently configures basic #network devices*VLAN setup, firewall rules on routers/switches#, understands #application-layer protocols*HTTP/HTTPS#, analyzes traffic, and resolves #common faults*port blocking, DNS resolution failure#.',
              3: 'Designs and implements #mid-complexity network solutions*subnet planning, load balancing#, resolves #performance issues*high latency, packet loss#, optimizes #TCP parameters*MSS, congestion control#, and participates in network architecture reviews.',
              4: 'Leads #network performance tuning*QoS policies, SDN implementation, CDN integration#, diagnoses #complex failures*DDoS attacks, cross-region latency#, has experience with high-availability architectures.',
              5: 'Makes #original contributions*e.g., IETF RFC proposals, patented technologies# to networking, pioneers industry-scale architectures, sets technical standards.'
            }
          },
          {
            name: 'Algorithm',
            rating: 1,
            description: {
              1: 'Understands #basic data structures*arrays, linked lists, stacks, queues# and #simple algorithms*bubble sort, binary search#, can implement common algorithms, grasps time complexity.',
              2: 'Applies BFS/DFS, dynamic programming to solve #medium-level coding problems*e.g., pathfinding, knapsack#, analyzes time/space complexity, optimizes daily scripts.',
              3: 'Designs and implements #complex algorithms*e.g., Dijkstra’s shortest path, KMP string matching#, #optimizes performance*e.g., reducing O(n²) to O(n log n))#, resolves real-world project issues, leverages algorithm libraries.',
              4: 'Leads algorithm #performance tuning*e.g., distributed algorithm design for large datasets, GPU-accelerated optimization#, diagnoses algorithm bottlenecks, applies algorithms in AI/ML fields.',
              5: 'Makes #original contributions*e.g., novel algorithm proposals, core open-source contributions# to algorithms, pioneers industry-standard frameworks, publishes top-tier conference papers.',
            }
          }
        ]
      },
      {
        category: 'Programming Language',
        items: [
          {
            name: 'JavaScript',
            rating: 3,
            description: {
              1: 'Understands #basic syntax*variables, functions, conditions, loops#, uses native JS for DOM manipulation, writes #simple event handlers*e.g., button click#.',
              2: 'Proficient in #ES6+ features*arrow functions, const/let, modules, Promise#, implements #basic async calls*e.g., fetch API#, understands event loop fundamentals, resolves #common issues*e.g., closure traps, Promise chain errors#.',
              3: 'Masters #advanced language features*prototypes, closures, this binding, design patterns#, #optimizes performance*debouncing/throttling, memory leak analysis#, implements complex logic, resolves #mid-complexity issues*cross-scope data sync# independently.',
              4: 'Leads language-level #performance tuning*V8 engine optimization, memory management, bytecode analysis#, designs reusable #language tools*e.g., custom HOFs, type validation libraries#, solves #high-difficulty problems*microtask queue optimization, engine compatibility#.',
              5: 'Makes #original contributions*e.g., ECMAScript proposals, core open-source library commits# to JavaScript ecosystem, pioneers language standard evolution.',
            }
          },
          {
            name: 'TypeScript',
            rating: 3,
            description: {
              1: 'Understands #basic types*number/string/boolean#, completes basic type annotations.',
              2: 'Uses interfaces, #basic generics*e.g., Array<T>#, and module imports, resolves #common type issues*e.g., missing properties, parameter type errors#.',
              3: 'Masters #advanced types*union, intersection, type guards#, #optimizes type systems*e.g., as/in type assertions#, resolves #complex type problems*e.g., generic constraints, recursive types#.',
              4: 'Leads #type system design*e.g., custom utility types#, #optimizes compilation performance*reducing type-checking overhead, strict mode configuration#, handles large-scale type challenges.',
              5: 'Makes #original contributions*e.g., compiler core commits, open-source library core# to TypeScript ecosystem, pioneers language feature evolution.',
            }
          }
        ]
      },
      {
        category: 'Engineering',
        items: [
          {
            name: 'Database',
            rating: 2,
            description: {
              1: 'Understands #basic SQL syntax*SELECT/INSERT/UPDATE/DELETE#, executes simple queries using client, grasps #table relationships*primary/foreign keys#, completes CRUD operations.',
              2: 'Independently configures #database instances*user permissions, backup strategies#, writes #medium-complexity SQL*JOINs, GROUP BY, subqueries#, uses EXPLAIN for query analysis, resolves #common issues*slow query optimization, data duplication#.',
              3: 'Designs #database schemas*ER diagrams, normalization#, #optimizes query performance*indexing, partitioning#, handles transactions, participates in #architecture design*e.g., master-slave replication#, resolves #mid-complexity issues*e.g., lock contention under high concurrency#, and delivers stable solutions independently.',
              4: 'Leads database #performance tuning*sharding, read-write splitting, cache integration#, solves large-scale data challenges, has #NoSQL experience*e.g., MongoDB document model, Redis caching#.',
              5: 'Makes #original contributions*e.g., core open-source framework commits, patents# to databases, pioneers industry-scale architectures, sets technical standards.'
            }
          },
          {
            name: 'Frontend',
            rating: 2,
            description: {
              1: 'Understands #HTML/CSS basics*tags, selectors, box model#, writes simple static pages.',
              2: 'Develops small features with #frameworks*React/Vue#, understands component lifecycle, uses browser dev tools for debugging, resolves #common issues*e.g., responsive breakpoint failure, event binding errors#.',
              3: 'Designs and implements #mid-complexity features*e.g., responsive page, dynamic forms#, #optimizes performance*code splitting, lazy loading#, participates in requirements analysis, resolves cross-browser compatibility issues.',
              4: 'Leads #frontend architecture*e.g., micro-frontend, state management#, deeply optimizes performance, handles large-scale projects, mentors on #complex challenges*SSR/SSG optimization, memory leak analysis#.',
              5: 'Makes #original contributions*e.g., core open-source framework commits, patents#, pioneers industry standards, speaks at top conferences.'
            }
          },
          {
            name: 'Backend',
            rating: 2,
            description: {
              1: 'Understands #basic backend concepts*HTTP and RESTful API#, can write simple APIs using frameworks, completes CRUD operations.',
              2: 'Independently develops RESTful API endpoints, integrates basic database queries, tests APIs, resolves #common issues*CORS, parameter validation#.',
              3: 'Designs and implements #mid-complexity backend features*e.g., order processing, payment integration#, #integrates authentication*JWT/OAuth2#, manages transactions, #optimizes performance*caching, database indexing#, resolves #cross-service issues*e.g., API timeouts# independently.',
              4: 'Leads #backend architecture*e.g., microservices decomposition, service mesh#, deeply #optimizes performance*high-concurrency QPS tuning, distributed transactions#, handles large-scale systems, mentors teams on #complex challenges*service cascading failures, fault tolerance#.',
              5: 'Makes #original contributions*e.g., core open-source framework commits, patents#, pioneers industry-scale systems, sets technical standards.'
            }
          }
        ]
      },
      {
        category: 'Efficiency and Productivity',
        items: [
          {
            name: 'Testing',
            rating: 4,
            description: {
              1: 'Understands #basic testing concepts*test cases, bug lifecycle#, writes simple functional test cases using tools, performs manual testing.',
              2: 'Writes automated test scripts, executes regression testing, analyzes #basic defects*e.g., API response errors, data validation failures#.',
              3: 'Designs #test strategies*integration testing plans#, optimizes testing processes, resolves #mid-complexity defects*e.g., cross-service data consistency#, delivers reliable test reports independently.',
              4: 'Leads performance testing, security testing, designs #testing architecture*e.g., microservices testing, chaos engineering#, handles large-scale testing.',
              5: 'Makes #original contributions*e.g., core open-source testing framework commits, patents#, pioneers industry standards, sets technical guidelines.'
            }
          },
          {
            name: 'Cloud Native',
            rating: 2,
            description: {
              1: 'Understands #cloud-native basics*containers, images, Docker commands#, runs simple apps with Docker, builds images and deploys.',
              2: 'Independently deploys apps to Kubernetes clusters, configures basic CI/CD pipelines, resolves #common issues*Pod status errors, service exposure failures#.',
              3: 'Designs #cloud-native architectures*e.g., microservices split, service mesh setup#, optimizes #resource usage*CPU/memory quotas#, resolves #mid-complexity issues*cross-namespace communication, config hot reload#, independently handles deployment and monitoring.',
              4: 'Leads #large-scale cloud-native systems*K8s cluster scaling, multi-cluster management#, #deeply optimizes performance*network policies, node affinity#, solves #high-availability challenges*failover, data persistence#, and mentors teams on #complex scenarios*cloud-native security hardening, cost optimization#.',
              5: 'Makes #original contributions*e.g., core open-source commits, patents#, pioneers industry standards.'
            }
          }
        ]
      },
      {
        category: 'Natural Language',
        items: [
          {
            name: '中文',
            rating: 5,
            description: {
              1: 'Recognizes basic vocabulary and simple sentence structures, engages in minimal daily conversations. requires slow speech and repetition, #high error rate*e.g., vocabulary mix-ups, grammar errors#.',
              2: 'Handles #common daily scenarios*shopping, transportation, casual socializing#, understands simple instructions and short texts, conducts #basic communication*describing weather, expressing needs#, writes #short sentences*diary entries, email drafts#, #moderate error rate*tense errors, word choice#, requires moderate support.',
              3: 'Fluently discusses #general topics*hobbies, culture, travel#, understands most daily conversations and #medium-length texts*news summaries, simple articles#, writes #clear paragraphs*work emails, travel reports#, #low error rate*minor grammar/word choice#, adapts to different accents and speech speeds.',
              4: 'Engages in in-depth discussions on #professional/abstract topics*tech, economics, art#, comprehends #complex texts and speeches*academic articles, documentaries#, writes #professional documents*reports, proposals#, nearly error-free, handles multicontext communication, natural subtle expression.',
              5: 'Seamlessly integrates into native-speaking environments, understands all #linguistic nuances*slang, cultural idioms, emotional cues#, near-zero errors in writing/speech, conducts #academic/professional-level discussions*debates, deep analysis#, highly sensitive to linguistic subtleties.'
            }
          },
          {
            name: 'English',
            rating: 2,
            description: {
              1: 'Recognizes basic vocabulary and simple sentence structures, engages in minimal daily conversations. requires slow speech and repetition, #high error rate*e.g., vocabulary mix-ups, grammar errors#.',
              2: 'Handles #common daily scenarios*shopping, transportation, casual socializing#, understands simple instructions and short texts, conducts #basic communication*describing weather, expressing needs#, writes #short sentences*diary entries, email drafts#, #moderate error rate*tense errors, word choice#, requires moderate support.',
              3: 'Fluently discusses #general topics*hobbies, culture, travel#, understands most daily conversations and #medium-length texts*news summaries, simple articles#, writes #clear paragraphs*work emails, travel reports#, #low error rate*minor grammar/word choice#, adapts to different accents and speech speeds.',
              4: 'Engages in in-depth discussions on #professional/abstract topics*tech, economics, art#, comprehends #complex texts and speeches*academic articles, documentaries#, writes #professional documents*reports, proposals#, nearly error-free, handles multicontext communication, natural subtle expression.',
              5: 'Seamlessly integrates into native-speaking environments, understands all #linguistic nuances*slang, cultural idioms, emotional cues#, near-zero errors in writing/speech, conducts #academic/professional-level discussions*debates, deep analysis#, highly sensitive to linguistic subtleties.'
            }
          },
          {
            name: '日本語',
            rating: 1,
            description: {
              1: 'Recognizes basic vocabulary and simple sentence structures, engages in minimal daily conversations. requires slow speech and repetition, #high error rate*e.g., vocabulary mix-ups, grammar errors#.',
              2: 'Handles #common daily scenarios*shopping, transportation, casual socializing#, understands simple instructions and short texts, conducts #basic communication*describing weather, expressing needs#, writes #short sentences*diary entries, email drafts#, #moderate error rate*tense errors, word choice#, requires moderate support.',
              3: 'Fluently discusses #general topics*hobbies, culture, travel#, understands most daily conversations and #medium-length texts*news summaries, simple articles#, writes #clear paragraphs*work emails, travel reports#, #low error rate*minor grammar/word choice#, adapts to different accents and speech speeds.',
              4: 'Engages in in-depth discussions on #professional/abstract topics*tech, economics, art#, comprehends #complex texts and speeches*academic articles, documentaries#, writes #professional documents*reports, proposals#, nearly error-free, handles multicontext communication, natural subtle expression.',
              5: 'Seamlessly integrates into native-speaking environments, understands all #linguistic nuances*slang, cultural idioms, emotional cues#, near-zero errors in writing/speech, conducts #academic/professional-level discussions*debates, deep analysis#, highly sensitive to linguistic subtleties.'
            }
          }
        ]
      }
    ]
  }
}

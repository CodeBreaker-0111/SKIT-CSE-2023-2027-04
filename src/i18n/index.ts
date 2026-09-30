import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = {
  translation: {
    auth: {
      badge: "NAGARSEVA • SECURE WORKSPACE",
      title: "Secure access to NagarSeva",
      description: "Sign in securely using your Google account to report civic issues, track report progress, collaborate with your community, and access your personalized dashboard.",
      signInButton: "Sign in with Google",
      signingIn: "Signing in...",
      backToHome: "Back to Home",
      indicators: {
        secure: "Secure Login",
        tracking: "Real-time Tracking",
        ai: "AI Assisted Workflow"
      }
    },
    privacy: {
      eyebrow: "Project policy",
      title: "Privacy Policy",
      description: "A plain-language overview of the information NagarSeva uses and how the current demonstration handles it.",
      updated: "28 June 2026",
      sections: {
        data_collection: {
          title: "Data Collection",
          description: "NagarSeva collects the information needed to operate the civic reporting demonstration. This can include your Google account name, email address, report description, category, report status, and technical timestamps."
        },
        authentication: {
          title: "Authentication",
          description: "Google sign-in is handled through Firebase Authentication. NagarSeva uses your authenticated user identifier to associate reports with your account. Passwords are not collected or stored by this application."
        },
        firebase: {
          title: "Firebase Usage",
          description: "Firestore stores account-related profile information, submitted report details, AI analysis results, location details when provided, and report status history. Firebase services are configured by the project operator."
        },
        location: {
          title: "Location Permissions",
          description: "Location access is requested through your browser when you use reporting features. If granted, coordinates, accuracy, and a resolved address may be included with your report. You can deny or revoke location access in browser settings."
        },
        media: {
          title: "Image and Video Selection",
          description: "Media you select is used to request AI-assisted issue analysis. The current report record stores media type information and the resulting analysis; it does not store the original selected media file in Firestore."
        },
        voice: {
          title: "Voice Interaction",
          description: "Speech-to-Text and Text-to-Speech use browser-provided Web Speech capabilities. Browser and operating-system vendors may process speech according to their own policies. NagarSeva does not intentionally store raw voice recordings."
        },
        cookies: {
          title: "Cookies and Local Storage",
          description: "Firebase Authentication may use browser storage to maintain your signed-in session. NagarSeva also uses local browser storage for preferences such as language when you are signed out. No advertising cookies are intentionally added by this project."
        },
        contact: {
          title: "Contact",
          description: "For privacy questions, use the Contact page. The public project email is currently a team-supplied placeholder and should be replaced with the final support address before launch."
        }
      }
    },
    terms: {
      eyebrow: "Project terms",
      title: "Terms of Service",
      description: "Practical terms for responsible use of the NagarSeva demonstration and its AI-assisted reporting workflow.",
      updated: "28 June 2026",
      sections: {
        acceptable_use: {
          title: "Acceptable Use",
          description: "Use NagarSeva only for lawful civic reporting and evaluation. Do not submit harassment, illegal material, intentionally false reports, malicious files, or content that violates another person’s privacy or safety."
        },
        user_resp: {
          title: "User Responsibilities",
          description: "You are responsible for the accuracy and appropriateness of the information you submit. Avoid including unnecessary personal or sensitive information, and confirm that you have permission to share selected media."
        },
        ownership: {
          title: "Content Ownership",
          description: "You retain ownership of content you create. By submitting a report, you permit the project to process that content as needed to analyze, display, route, and demonstrate the civic reporting workflow."
        },
        disclaimer: {
          title: "AI Assistance Disclaimer",
          description: "AI output can be incomplete or incorrect. Categories, summaries, confidence values, priorities, translations, and recommendations are assistive signals and should be reviewed by people before consequential action is taken."
        },
        notice: {
          title: "Municipal Demonstration Notice",
          description: "NagarSeva is a solution-challenge project and civic workflow demonstration. Unless a participating authority explicitly states otherwise, submitting a report here does not replace an official emergency or municipal reporting channel.",
          item1: "Do not use NagarSeva for emergencies.",
          item2: "Use local emergency services when immediate safety is at risk.",
          item3: "Demo metrics, forecasts, and community health indicators are illustrative where labelled."
        },
        liability: {
          title: "Limitation of Liability",
          description: "The project is provided for demonstration and evaluation without a guarantee of uninterrupted availability, municipal response, issue resolution, or AI accuracy. Applicable legal rights and responsibilities may vary by jurisdiction."
        }
      }
    },
    contact: {
      eyebrow: "Project Contact",
      title: "Let's Build More Responsive Communities",
      description: "NagarSeva explores how AI-assisted civic reporting helps residents and local authorities collaborate from issue reporting through transparent resolution.",
      challenge: {
        title: "Google Solution Challenge",
        desc: "NagarSeva demonstrates how responsible AI can improve transparency, accessibility and collaboration between citizens and local authorities."
      },
      developer: {
        title: "Project Developer",
        name: "NagarSeva Team",
        degree: "B.Tech Computer Science & Engineering (Data Science)",
        institution: "SKIT Jaipur",
        focus: "AI • Data Science • Civic Technology"
      },
      links: {
        title: "Connect with the Developer",
        github: "GitHub Profile",
        linkedin: "LinkedIn Profile",
        note: "Open to collaboration, research opportunities, and civic technology discussions."
      },
      form: {
        successTitle: "Message prepared",
        successMessage: "This demonstration form does not send data to a backend. Connect a verified team inbox before production launch.",
        backText: "Back to form",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        placeholderName: "John Doe",
        placeholderEmail: "john@example.com",
        placeholderSubject: "How can we help?",
        placeholderMessage: "Tell us more details...",
        demoText: "UI demonstration only—this form does not transmit or store your message.",
        submitButton: "Prepare message"
      },
      faq: {
        eyebrow: "Quick Answers",
        title: "Frequently Asked Questions",
        q1: "Is NagarSeva an official municipal service?",
        a1: "No. NagarSeva is currently in a Testing Phase and civic workflow demonstration unless adopted by a participating authority.",
        q2: "Does the contact form send messages?",
        a2: "No. This page currently demonstrates the user interface only. A production backend can be connected later.",
        q3: "Are homepage statistics real?",
        a3: "No. All dashboards, AI-generated insights and impact metrics are illustrative demonstrations and are labelled accordingly."
      }
    },

    common: {
      loading: "Loading...",
      error: "Error",
      reset: "Reset",
      submit: "Submit",
      cancel: "Cancel",
      back: "Back",
      retry: "Retry",
      progress: "Progress",
      chooseFile: "Choose File",
      camera: "Camera",
      dragDrop: "Drag & drop an image or video here",
      viewLiveTracking: "View Live Tracking",
      play: "Play",
      pause: "Pause",
      resume: "Resume",
      stop: "Stop",
      preview: "Preview",
      remove: "Remove",
    },
    navbar: {
      home: "Home",
      report: "Report Issue",
      map: "Live Map",
      dashboard: "Dashboard",
      myReports: "My Reports",
      login: "Sign in with Google",
      logout: "Logout",
      adminPanel: "Admin Panel",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    admin: {
      title: "Municipal Authority Panel",
      subtitle: "Manage reports, assign departments, and track resolution metrics.",
      menu: {
        dashboard: "Dashboard",
        reports: "Reports",
        users: "Users",
        analytics: "Analytics",
      },
      dashboard: {
        total: "Total Reports",
        pending: "Pending",
        verified: "Verified",
        assigned: "Assigned",
        inProgress: "In Progress",
        resolved: "Resolved",
        highPriority: "High Priority",
        today: "Today's Reports",
        recentTitle: "Recent Activity",
        viewAll: "View All Reports",
        quickActions: "Quick Links",
        manageReports: "Manage Reports",
        manageUsers: "Manage Users",
        viewAnalytics: "View Analytics",
      },
      reports: {
        search: "Search reports…",
        allStatuses: "All Statuses",
        allCategories: "All Categories",
        allDepartments: "All Departments",
        allPriorities: "All Priorities",
        newest: "Newest First",
        oldest: "Oldest First",
        showing: "Showing",
        of: "of",
        results: "results",
        empty: "No reports found",
        emptyHint: "Try adjusting your filters or search terms.",
      },
    },

    footer: {
      about: {
        title: "About NagarSeva",
        desc: "NagarSeva is an AI-assisted civic reporting platform that empowers citizens and local authorities to collaborate through transparent issue reporting, multilingual accessibility, and real-time progress tracking.",
      },
      tech: {
        title: "Technology Stack",
        items: {
          nextjs: "Next.js 16",
          react: "React + TypeScript",
          firebase: "Firebase + Firestore",
          ai: "Google AI Studio",
          maps: "OpenStreetMap + Leaflet",
          tailwind: "Tailwind CSS",
        },
      },
      quick_links: { title: "Quick Links" },
      recognition: {
        title: "Recognition",
        badge: "Google Solution Challenge 2026",
        desc: "Designed to demonstrate how responsible AI, multilingual accessibility, and transparent civic workflows can strengthen collaboration between communities and municipalities.",
      },
      challenge_tag: "Built with ❤️ for Bhartiya Janta",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      copyright: "© {{year}} NagarSeva. All rights reserved.",
    },
    landing: {
      hero: {
        eyebrow: "AI-Powered Civic Intelligence Platform",
        tagline: "One Report. Six AI Agents. One Stronger Community.",
        headline: {
          before: "When neighbors speak up, ",
          highlight: "communities transform.",
        },
        description: "NagarSeva turns a single photo and voice note into a verified, prioritized, trackable civic action—so every report reaches the right authority and every resident stays informed.",
        ctas: {
          primary: "Report an Issue",
          secondary: "Explore Live Map",
        },
        trust_badges: {
          "ai-powered": "AI Powered",
          "real-time": "Real-Time Tracking",
          "multilingual": "Multilingual Support",
        },
      },
      problem: {
        eyebrow: "The civic problem",
        title: "Reporting should connect people—not bury them in paperwork",
        description: "Most cities still run on forms, phone trees, and hope. Citizens report once, then hear nothing. Trust erodes. Issues pile up. NagarSeva exists to close that gap.",
        cards: {
          "black-hole": {
            title: "Reports vanish into a black hole",
            description: "Citizens submit issues and never receive updates. Without visibility, people stop reporting—and problems grow unchecked.",
          },
          "no-accountability": {
            title: "No one owns the outcome",
            description: "Departments pass tickets between desks. Residents cannot see who is responsible or when work will begin.",
          },
          "language-barrier": {
            title: "Language locks people out",
            description: "Official portals assume English fluency and digital literacy, excluding the very communities that need help most.",
          },
          "slow-response": {
            title: "Urgency is invisible",
            description: "A pothole and a gas leak look the same in a spreadsheet. Without intelligent triage, critical issues wait in line.",
          },
        },
      },
      solution: {
        eyebrow: "THE REPORT WORKFLOW",
        title: "From Report to Resolution",
        description: "NagarSeva guides every report through an AI-assisted civic workflow that helps residents, local authorities, and communities collaborate toward transparent issue resolution.",
        flow: {
          citizen: {
            label: "Citizen",
            detail: "Snaps a photo, records a voice note, or taps a map pin",
          },
          agents: {
            label: "AI Agents",
            detail: "Six specialized agents analyze, verify, and route the report",
          },
          authorities: {
            label: "Authorities",
            detail: "Ward engineers and departments receive prioritized work orders",
          },
          community: {
            label: "Community",
            detail: "Neighbors track progress and verify fixes together",
          },
          resolution: {
            label: "Resolution",
            detail: "Issues close with proof—and trust is rebuilt block by block",
          },
        },
      },
      agents: {
        eyebrow: "AI AGENT PIPELINE",
        title: "Six agents. One coordinated workflow.",
        description: "Each capability has a focused role in turning citizen input into structured civic information, with human-readable explanations and intelligent assistance.",
        badges: { future_enhancement: "Future Enhancement" },
        list: {
          vision: { title: "Vision Agent", responsibility: "Analyzes photos and visual evidence from citizen reports." },
          geo: { title: "Geo Agent", responsibility: "Maps issues to precise ward boundaries and landmarks." },
          trust: { title: "Validation Agent", responsibility: "Validates report completeness and helps identify potential duplicate reports before submission." },
          priority: { title: "Priority Agent", responsibility: "Ranks urgency and community impact for faster response." },
          prediction: { title: "Future Prediction", responsibility: "Designed to evaluate issue escalation tendencies using historical municipal patterns." },
          copilot: { title: "Citizen Assistant", responsibility: "Guides citizens through multilingual assistance, explains decisions, and supports issue tracking." },
        },
      },
      credibility: {
        title: "Built for Transparent Civic Collaboration",
        description: "NagarSeva demonstrates how AI-assisted workflows, multilingual accessibility, and transparent reporting can strengthen collaboration between citizens and local authorities.",
        cards: {
          ai: {
            title: "AI-Assisted Reporting",
            desc: "Instantly categorizes, summarizes, and prioritizes reports with vision, location, and speech analysis.",
          },
          tracking: {
            title: "Transparent Tracking",
            desc: "Keeps residents and officials updated in real time through structured progress timelines.",
          },
          i18n: {
            title: "Multilingual Accessibility",
            desc: "Translates the interface into 8 regional languages with integrated Speech-to-Text inputs.",
          },
          verification: {
            title: "Community Verification",
            desc: "Builds municipal trust through verified local coordinates and multi-neighbor confirmations.",
          },
        },
      },

      live_tracking: {
        eyebrow: "Live tracking preview",
        title: "Every report. Every status. In real time.",
        description: "Residents and officials share one transparent dashboard—so nobody has to call a helpline to ask what happened to their report.",
        sampleLabel: "Sample dashboard preview",
        labels: {
          engineerStatus: "Engineer Status",
          eta: "ETA",
          verification: "Community Verification",
          progress: "Progress",
        },
        issue: {
          category: "Road Repair",
          ward: "Ward 18",
          engineerStatus: "Engineer assigned — inspection complete",
          eta: "Estimated resolution: 4 days",
          verification: "3 of 5 neighbors verified on-site",
        },
      },
      twin: {
        eyebrow: "Community digital twin",
        title: "Your neighborhood, measured and understood",
        description: "AI synthesizes reports, resolutions, and community feedback into living health scores—giving leaders and residents a shared picture of civic wellbeing.",
        demoLabel: "AI-generated demo scores",
        scores: {
          infrastructure: {
            label: "Infrastructure",
            trend: "+3 this month",
          },
          safety: {
            label: "Safety",
            trend: "+5 this month",
          },
          cleanliness: {
            label: "Cleanliness",
            trend: "+2 this month",
          },
          water: {
            label: "Water",
            trend: "Stable",
          },
          health: {
            label: "Community Health",
            trend: "+4 this month",
          },
        },
      },
      google: {
        eyebrow: "TECHNOLOGY STACK",
        title: "Modern tech stack powered by AI & open standards",
        description: "NagarSeva combines Google AI, Firebase infrastructure, and open-source technologies to deliver secure, multilingual, AI-assisted civic reporting.",
        technologies: {
          "ai-studio": {
            category: "AI Platform",
            title: "Google AI Studio",
            description: "Gemini powers AI-assisted vision analysis, multilingual understanding, intelligent summarization, and community assistance across the platform."
          },
          firebase: {
            category: "Backend",
            title: "Firebase",
            description: "Firebase Authentication, Firestore database, secure storage, and real-time synchronization power the complete application backend."
          },
          maps: {
            category: "Interactive Maps",
            title: "OpenStreetMap + Leaflet",
            description: "Interactive open-source maps provide issue locations, ward boundaries, and live geographic visualization."
          },
          speech: {
            category: "Browser API",
            title: "Web Speech API",
            description: "Browser-native Speech-to-Text and Text-to-Speech enable voice-based issue reporting and accessibility."
          },
          translate: {
            category: "Multilingual",
            title: "AI Powered Multilingual Translation",
            description: "Gemini-powered multilingual translation enables citizens to interact with NagarSeva in their preferred language."
          },
          analytics: {
            category: "Visualization",
            title: "Community Analytics Dashboard",
            description: "Interactive dashboards visualize issue statistics, category trends, response timelines, AI insights, and community health indicators."
          }
        }
      },
      impact: {
        eyebrow: "Community impact",
        title: "The difference transparency makes",
        description: "When citizens see progress, they report more, volunteer more, and trust more. These numbers illustrate what becomes possible.",
        demoLabel: "Sample statistics for demonstration",
        stats: {
          solved: {
            label: "Issues Solved",
          },
          citizens: {
            label: "Citizens Helped",
          },
          volunteer: {
            label: "Volunteer Hours",
          },
          resolution: {
            label: "Resolution Rate",
          },
        },
      },
      final_cta: {
        title: "Ready to make an impact?",
        description: "Join your neighbors in building a cleaner, safer, and more responsive community today.",
        ctas: {
          primary: "Report an Issue",
          secondary: "Explore Live Map",
        },
      },
    },
    dashboard: {
      title: "Dashboard",
      subtitle: "Your civic impact",
      description: "Review your latest submissions, track status, and see how your reports are moving through the community process.",
      stats: {
        totalReports: "Total reports",
        pending: "Pending",
        assigned: "Assigned",
        inProgress: "In progress",
        resolved: "Resolved",
      },
      gamification: {
        levelProgress: "Progress to Next Level",
        pointsRequired: "{{points}} pts until {{level}}",
        dailyStreak: "Daily Streak",
        streakDays: "{{days}} Days",
        streakTip: "Log in daily to maintain your streak!",
        badgesEarned: "Badges Earned",
        badgesTip: "Unlock achievements to earn points!",
        cityRank: "City Rank",
        rankTip: "Your position on the global board",
        badgesTitle: "Civic Badges",
        badgesSubtitle: "Earn badges by contributing to community cleanups and report tracking.",
        pts: "pts",
        badge: "badge",
        badges: "badges",
      },
      leaderboard: {
        title: "City Leaderboard",
        subtitle: "Top 10 Heroes",
        empty: "No heroes on the board yet.",
        pts: "pts",
      },
      performance: {
        title: "Performance",
        description: "AI analysis metrics and priority distribution.",
        verifiedByAi: "Verified by AI",
        verifiedTip: "Reports containing AI analysis",
        highPriority: "High Priority",
        highPriorityTip: "Priority score ≥ 80",
        averagePriority: "Average Priority",
        averagePriorityTip: "Average score of AI reports",
        averageConfidence: "Average AI Confidence",
        averageConfidenceTip: "Confidence of AI processing",
      },
      recentReports: {
        title: "Recent reports",
        subtitle: "Latest issues submitted by you.",
        loading: "Loading your reports...",
        empty: "No reports found yet. Submit your first report to start tracking progress.",
      },
    },
    reportForm: {
      title: "Report a Civic Issue",
      description: "Upload an image or short video of the issue. Our AI will analyze the evidence and recommend the appropriate department.",
      uploadTitle: "Upload Evidence",
      uploadTip: "Supported formats: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "Description",
      descPlaceholder: "Describe the civic issue... (You can also speak by clicking the microphone button)",
      categoryLabel: "Category",
      locationStatus: "Location status",
      locationDetail: {
        waiting: "Waiting for browser permission...",
        denied: "Location permission denied. You can still submit without a detected location.",
        detected: "Location detected",
        requesting: "Requesting location...",
      },
      locationCard: {
        address: "Address",
        latitude: "Latitude",
        longitude: "Longitude",
        city: "City",
        region: "Region",
        accuracy: "Accuracy: {{accuracy}} meters",
      },
      buttons: {
        analyze: "Analyze with AI",
        analyzing: "Analyzing...",
        complete: "✓ AI Analysis Complete",
        submit: "Submit Report",
        submitting: "Submitting...",
        reset: "Reset",
      },
      speech: {
        start: "Start voice recording",
        stop: "Stop voice recording",
        unsupported: "Speech-to-Text is not supported by your browser.",
      },
    },
    reports: {
      title: "My Reports",
      subtitle: "Report history",
      description: "Browse every issue you submitted and check status updates from the community review process.",
      loading: "Loading your reports...",
      empty: {
        line1: "You haven't submitted any reports yet.",
        line2: "Head over to the Report page to file a new issue.",
      },
    },
    reportDetail: {
      title: "Report Details",
      subtitle: "Live tracking",
      description: "Review the current status, analysis, timeline, and department assignment for this report.",
      created: "Created",
      lastUpdated: "Last updated",
      location: "Location",
      noLocation: "Location not available",
      assignedDept: "Assigned Department",
      notAssigned: "Not assigned",
      aiAnalysis: {
        title: "AI Analysis",
        category: "Category",
        department: "Department",
        severity: "Severity",
        priority: "Priority Score",
        confidence: "AI Confidence",
        summary: "Summary",
        empty: "No AI analysis is available for this report.",
        translating: "Translating summary...",
      },
      speech: {
        read: "Read content aloud",
        stop: "Stop reading",
      },
      notFound: {
        title: "Report Not Found",
        description: "The report you are trying to view does not exist or you do not have permission to view it.",
        back: "Back to Reports",
      },
    },
    tracking: {
      progress: {
        title: "Report Progress",
        description: "Track the current stage of your report.",
      },
      timeline: {
        title: "Tracking Timeline",
        description: "Recent updates shown in chronological order.",
      },
      status: {
        submitted: "Report submitted by citizen.",
        assigned: "Assigned to the corresponding municipal department.",
        inspectionStarted: "Inspection completed, field work started.",
        inProgress: "In Progress",
        verified: "AI verification completed",
        resolved: "Issue resolved",
        closed: "Report closed",
        Pending: "Pending",
        Verified: "Verified",
        Assigned: "Assigned",
        "In Progress": "In Progress",
        Resolved: "Resolved",
        "Issue submitted": "Issue submitted",
        "AI verification completed": "AI verification completed",
        "Assigned to department": "Assigned to department",
        "Work started": "Work started",
        "Issue resolved": "Issue resolved",
      },
    },
    liveMap: {
      title: "Live Community Map",
      subtitle: "Real-time reporting",
      description: "View and track ongoing civic issues across the community in real-time.",
      statistics: "Statistics",
      legend: "Legend",
      filters: {
        category: "All Categories",
        status: "All Statuses",
        all: "All",
      },
      popup: {
        department: "Assigned Department",
        priority: "Priority Score",
        severity: "Severity",
        confidence: "AI Confidence",
        address: "Address",
        time: "Reported Time",
        button: "View Live Tracking →",
      },
      empty: {
        title: "No civic reports available.",
        description: "No active reports match the selected filters or contain geolocation details. Check back later or submit a new report.",
      },
      connecting: "Connecting to Firestore...",
      loading: "Loading interactive map...",
    },
    badges: {
      first_report: {
        name: "First Report",
        description: "Submitted your first civic report.",
      },
      five_reports: {
        name: "5 Reports",
        description: "Submitted five civic reports.",
      },
      ten_reports: {
        name: "10 Reports",
        description: "Submitted ten civic reports.",
      },
      points_100: {
        name: "100 Hero Points",
        description: "Reached 100 Hero Points.",
      },
      points_500: {
        name: "500 Hero Points",
        description: "Reached 500 Hero Points.",
      },
      streak_7: {
        name: "7 Day Streak",
        description: "Maintained a 7-day active streak.",
      },
      clean_city_hero: {
        name: "Clean City Hero",
        description: "Submitted a report to help clean the city.",
      },
      traffic_guardian: {
        name: "Traffic Guardian",
        description: "Reported traffic signal or safety issues.",
      },
      environment_protector: {
        name: "Environment Protector",
        description: "Reported water leakages or sewerage issues.",
      },
      community_starter: {
        name: "Community Starter",
      },
      civic_volunteer: {
        name: "Civic Volunteer",
      },
      community_guardian: {
        name: "Community Guardian",
      },
      city_hero: {
        name: "City Hero",
      },
      civic_champion: {
        name: "Civic Champion",
      },
      community_legend: {
        name: "Community Legend",
      },
    },
    toasts: {
      badgeUnlocked: "Badge Unlocked",
      pointsAwarded: "+{{points}} Hero Points",
    },
    categories: {
      Roads: "Roads",
      Garbage: "Garbage",
      Water: "Water",
      Traffic: "Traffic",
      "Street Lights": "Street Lights",
      Safety: "Safety",
      Other: "Other",
    },
    departments: {
      "Public Works Department": "Public Works Department",
      "Municipal Corporation": "Municipal Corporation",
      "Water Department": "Water Department",
      "Traffic Police": "Traffic Police",
      "Electricity Department": "Electricity Department",
      "Public Safety": "Public Safety",
      "Environment Department": "Environment Department",
      "Awaiting Assignment": "Awaiting Assignment",
    },
    severity: {
      Low: "Low",
      Medium: "Medium",
      High: "High",
      Critical: "Critical",
      Pending: "Pending",
    },
  },
};

const hi = {
  translation: {
    auth: {
      badge: "कम्युनिटी हीरो • सुरक्षित कार्यक्षेत्र",
      title: "कम्युनिटी हीरो तक सुरक्षित पहुंच",
      description: "नागरिक समस्याओं की रिपोर्ट करने, रिपोर्ट की प्रगति को ट्रैक करने, अपने समुदाय के साथ सहयोग करने और अपने व्यक्तिगत डैशबोर्ड तक पहुंचने के लिए अपने Google खाते का उपयोग करके सुरक्षित रूप से साइन इन करें।",
      signInButton: "गूगल के साथ साइन इन करें",
      signingIn: "साइन इन किया जा रहा है...",
      backToHome: "होम पर वापस जाएं",
      indicators: {
        secure: "सुरक्षित लॉगिन",
        tracking: "रियल-टाइम ट्रैकिंग",
        ai: "AI सहायक वर्कफ़्लो"
      }
    },
    privacy: {
      eyebrow: "परियोजना नीति",
      title: "गोपनीयता नीति",
      description: "कम्युनिटी हीरो द्वारा उपयोग की जाने वाली जानकारी और वर्तमान प्रदर्शन इसे कैसे संभालता है, इसका एक सरल भाषा में अवलोकन।",
      updated: "28 जून 2026",
      sections: {
        data_collection: {
          title: "डेटा संग्रह",
          description: "कम्युनिटी हीरो नागरिक रिपोर्टिंग प्रदर्शन को संचालित करने के लिए आवश्यक जानकारी एकत्र करता है। इसमें आपका Google खाता नाम, ईमेल पता, रिपोर्ट विवरण, श्रेणी, रिपोर्ट की स्थिति और तकनीकी टाइमस्टैम्प शामिल हो सकते हैं।"
        },
        authentication: {
          title: "प्रमाणीकरण",
          description: "Google साइन-इन को Firebase प्रमाणीकरण के माध्यम से संभाला जाता है। कम्युनिटी हीरो आपकी रिपोर्ट को आपके खाते से जोड़ने के लिए आपके प्रमाणित उपयोगकर्ता पहचानकर्ता का उपयोग करता है। इस एप्लिकेशन द्वारा पासवर्ड एकत्र या संग्रहीत नहीं किए जाते हैं।"
        },
        firebase: {
          title: "Firebase उपयोग",
          description: "Firestore खाता-संबंधित प्रोफ़ाइल जानकारी, सबमिट किए गए रिपोर्ट विवरण, AI विश्लेषण परिणाम, स्थान विवरण (यदि प्रदान किया गया हो) और रिपोर्ट स्थिति इतिहास संग्रहीत करता है। Firebase सेवाएं परियोजना ऑपरेटर द्वारा कॉन्फ़िगर की गई हैं।"
        },
        location: {
          title: "स्थान अनुमतियाँ",
          description: "जब आप रिपोर्टिंग सुविधाओं का उपयोग करते हैं तो आपके ब्राउज़र के माध्यम से स्थान पहुंच का अनुरोध किया जाता है। यदि अनुमति दी जाती है, तो आपकी रिपोर्ट में निर्देशांक, सटीकता और एक हल किया गया पता शामिल किया जा सकता है। आप ब्राउज़र सेटिंग्स में स्थान पहुंच को अस्वीकार या रद्द कर सकते हैं।"
        },
        media: {
          title: "छवि और वीडियो चयन",
          description: "आपके द्वारा चुनी गई मीडिया का उपयोग AI-सहायक समस्या विश्लेषण का अनुरोध करने के लिए किया जाता है। वर्तमान रिपोर्ट रिकॉर्ड मीडिया प्रकार की जानकारी और परिणामी विश्लेषण को संग्रहीत करता है; यह मूल चयनित मीडिया फ़ाइल को Firestore में संग्रहीत नहीं करता है।"
        },
        voice: {
          title: "आवाज संपर्क",
          description: "भाषण-से-पाठ (Speech-to-Text) और पाठ-से-भाषण (Text-to-Speech) ब्राउज़र-प्रदान की गई वेब स्पीच क्षमताओं का उपयोग करते हैं। ब्राउज़र और ऑपरेटिंग-सिस्टम विक्रेता अपनी नीतियों के अनुसार भाषण को संसाधित कर सकते हैं। कम्युनिटी हीरो जानबूझकर कच्चे वॉयस रिकॉर्डिंग को संग्रहीत नहीं करता है।"
        },
        cookies: {
          title: "कुकीज़ और स्थानीय संग्रहण",
          description: "Firebase प्रमाणीकरण आपके साइन-इन सत्र को बनाए रखने के लिए ब्राउज़र संग्रहण का उपयोग कर सकता है। जब आप साइन आउट होते हैं, तो कम्युनिटी हीरो भाषा जैसी प्राथमिकताओं के लिए स्थानीय ब्राउज़र संग्रहण का भी उपयोग करता है। इस परियोजना द्वारा कोई विज्ञापन कुकीज़ जानबूझकर नहीं जोड़ी जाती हैं।"
        },
        contact: {
          title: "संपर्क",
          description: "गोपनीयता प्रश्नों के लिए, संपर्क पृष्ठ का उपयोग करें। सार्वजनिक परियोजना ईमेल वर्तमान में एक टीम-प्रदान किया गया प्लेसहोल्डर है और लॉन्च से पहले इसे अंतिम सहायता पते से बदला जाना चाहिए।"
        }
      }
    },
    terms: {
      eyebrow: "परियोजना की शर्तें",
      title: "सेवा की शर्तें",
      description: "कम्युनिटी हीरो प्रदर्शन और इसके AI-सहायक रिपोर्टिंग वर्कफ़्लो के जिम्मेदार उपयोग के लिए व्यावहारिक शर्तें।",
      updated: "28 जून 2026",
      sections: {
        acceptable_use: {
          title: "स्वीकार्य उपयोग",
          description: "कम्युनिटी हीरो का उपयोग केवल वैध नागरिक रिपोर्टिंग और मूल्यांकन के लिए करें। उत्पीड़न, अवैध सामग्री, जानबूझकर झूठी रिपोर्ट, दुर्भावनापूर्ण फाइलें या ऐसी सामग्री सबमिट न करें जो किसी अन्य व्यक्ति की गोपनीयता या सुरक्षा का उल्लंघन करती हो।"
        },
        user_resp: {
          title: "उपयोगकर्ता की जिम्मेदारियां",
          description: "आपके द्वारा सबमिट की जाने वाली जानकारी की सटीकता और उपयुक्तता के लिए आप जिम्मेदार हैं। अनावश्यक व्यक्तिगत या संवेदनशील जानकारी शामिल करने से बचें, और पुष्टि करें कि आपके पास चयनित मीडिया को साझा करने की अनुमति है।"
        },
        ownership: {
          title: "सामग्री का स्वामित्व",
          description: "आपके द्वारा बनाई गई सामग्री का स्वामित्व आपके पास रहता है। एक रिपोर्ट सबमिट करके, आप परियोजना को नागरिक रिपोर्टिंग वर्कफ़्लो का विश्लेषण, प्रदर्शन, रूट और प्रदर्शित करने के लिए आवश्यक रूप से उस सामग्री को संसाधित करने की अनुमति देते हैं।"
        },
        disclaimer: {
          title: "AI सहायता अस्वीकरण",
          description: "AI आउटपुट अपूर्ण या गलत हो सकता है। श्रेणियां, सारांश, आत्मविश्वास मूल्य, प्राथमिकताएं, अनुवाद और सिफारिशें सहायक संकेत हैं और परिणामी कार्रवाई किए जाने से पहले लोगों द्वारा उनकी समीक्षा की जानी चाहिए।"
        },
        notice: {
          title: "नगरपालिका प्रदर्शन नोटिस",
          description: "कम्युनिटी हीरो एक समाधान-चुनौती परियोजना और नागरिक वर्कफ़्लो प्रदर्शन है। जब तक कि कोई भाग लेने वाला प्राधिकरण स्पष्ट रूप से अन्यथा न कहे, यहाँ रिपोर्ट सबमिट करने से कोई आधिकारिक आपातकालीन या नगरपालिका रिपोर्टिंग चैनल प्रतिस्थापित नहीं होता है।",
          item1: "आपातकालीन स्थितियों के लिए कम्युनिटी हीरो का उपयोग न करें।",
          item2: "तत्काल सुरक्षा खतरे में होने पर स्थानीय आपातकालीन सेवाओं का उपयोग करें।",
          item3: "डेमो मेट्रिक्स, पूर्वानुमान और सामुदायिक स्वास्थ्य संकेतक जहां लेबल किए गए हैं, वहां उदाहरण के लिए हैं।"
        },
        liability: {
          title: "दायित्व की सीमा",
          description: "परियोजना निरंतर उपलब्धता, नगरपालिका प्रतिक्रिया, समस्या समाधान, या AI सटीकता की गारंटी के बिना प्रदर्शन और मूल्यांकन के लिए प्रदान की जाती है। लागू कानूनी अधिकार और जिम्मेदारियां क्षेत्राधिकार के अनुसार भिन्न हो सकती हैं।"
        }
      }
    },
    contact: {
      eyebrow: "परियोजना संपर्क",
      title: "आइए अधिक उत्तरदायी समुदाय बनाएं",
      description: "कम्युनिटी हीरो यह पता लगाता है कि कैसे AI-सहायक नागरिक रिपोर्टिंग निवासियों और स्थानीय अधिकारियों को पारदर्शी समाधान के माध्यम से रिपोर्टिंग से सहयोग करने में मदद करती है।",
      challenge: {
        title: "Google Solution Challenge",
        desc: "कम्युनिटी हीरो यह दर्शाता है कि कैसे जिम्मेदार AI नागरिकों और स्थानीय अधिकारियों के बीच पारदर्शिता, पहुंच और सहयोग में सुधार कर सकता है।"
      },
      developer: {
        title: "परियोजना डेवलपर",
        name: "श्रेष्ठा स्वामी",
        degree: "बी.टेक कंप्यूटर साइंस एंड इंजीनियरिंग (डेटा साइंस)",
        institution: "एसकेआईटी जयपुर",
        focus: "AI • डेटा साइंस • नागरिक प्रौद्योगिकी"
      },
      links: {
        title: "डेवलपर के साथ जुड़ें",
        github: "गिटहब प्रोफाइल",
        linkedin: "लिंक्डइन प्रोफाइल",
        note: "सहयोग, अनुसंधान के अवसरों और नागरिक प्रौद्योगिकी चर्चाओं के लिए खुला है।"
      },
      form: {
        successTitle: "संदेश तैयार किया गया",
        successMessage: "यह प्रदर्शन फ़ॉर्म बैकएंड को डेटा नहीं भेजता है। उत्पादन शुरू करने से पहले एक सत्यापित टीम इनबॉक्स कनेक्ट करें।",
        backText: "फ़ॉर्म पर वापस जाएँ",
        name: "नाम",
        email: "ईमेल",
        subject: "विषय",
        message: "संदेश",
        placeholderName: "जॉन डो",
        placeholderEmail: "john@example.com",
        placeholderSubject: "हम आपकी क्या मदद कर सकते हैं?",
        placeholderMessage: "हमें और विवरण बताएं...",
        demoText: "केवल UI प्रदर्शन—यह फ़ॉर्म आपके संदेश को प्रसारित या संग्रहीत नहीं करता है।",
        submitButton: "संदेश तैयार करें"
      },
      faq: {
        eyebrow: "त्वरित उत्तर",
        title: "अक्सर पूछे जाने वाले प्रश्न",
        q1: "क्या कम्युनिटी हीरो एक आधिकारिक नगरपालिका सेवा है?",
        a1: "नहीं। कम्युनिटी हीरो वर्तमान में एक Google Solution Challenge परियोजना और नागरिक वर्कफ़्लो प्रदर्शन है जब तक कि किसी भाग लेने वाले प्राधिकरण द्वारा इसे अपनाया नहीं जाता।",
        q2: "क्या संपर्क फ़ॉर्म संदेश भेजता है?",
        a2: "नहीं। यह पृष्ठ वर्तमान में केवल उपयोगकर्ता इंटरफ़ेस का प्रदर्शन करता है। एक उत्पादन बैकएंड को बाद में जोड़ा जा सकता है।",
        q3: "क्या होमपेज के आंकड़े वास्तविक हैं?",
        a3: "नहीं। सभी डैशबोर्ड, AI-जनरेटेड अंतर्दृष्टि और प्रभाव मीट्रिक केवल उदाहरण के रूप में हैं और तदनुसार लेबल किए गए हैं।"
      }
    },

    common: {
      loading: "लोड हो रहा है...",
      error: "त्रुटि",
      reset: "रीसेट करें",
      submit: "जमा करें",
      cancel: "रद्द करें",
      back: "पीछे जाएं",
      retry: "पुनः प्रयास करें",
      progress: "प्रगति",
      chooseFile: "फ़ाइल चुनें",
      camera: "कैमरा",
      dragDrop: "एक छवि या वीडियो यहाँ खींचें और छोड़ें",
      viewLiveTracking: "लाइव ट्रैकिंग देखें",
      play: "चलाएं",
      pause: "रोकें",
      resume: "पुनः शुरू करें",
      stop: "बंद करें",
      preview: "पूर्वावलोकन",
      remove: "हटाएं",
    },
    navbar: {
      home: "होम",
      report: "समस्या की रिपोर्ट करें",
      map: "लाइव मैप",
      dashboard: "डैशबोर्ड",
      myReports: "मेरी रिपोर्टें",
      login: "गूगल से साइन इन करें",
      logout: "लॉगआउट",
      adminPanel: "एडमिन पैनल",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      about: {
        title: "कम्युनिटी हीरो के बारे में",
        desc: "कम्युनिटी हीरो एक AI-सहायक नागरिक रिपोर्टिंग प्लेटफ़ॉर्म है जो नागरिकों और स्थानीय अधिकारियों को पारदर्शी समस्या रिपोर्टिंग, बहुभाषी पहुंच और रियल-टाइम प्रगति ट्रैकिंग के माध्यम से सहयोग करने में सक्षम बनाता है।",
      },
      tech: {
        title: "तकनीकी स्टैक",
        items: {
          nextjs: "Next.js 16",
          react: "React + TypeScript",
          firebase: "Firebase + Firestore",
          ai: "Google AI Studio",
          maps: "OpenStreetMap + Leaflet",
          tailwind: "Tailwind CSS",
        },
      },
      quick_links: { title: "त्वरित लिंक" },
      recognition: {
        title: "मान्यता",
        badge: "Google Solution Challenge 2026",
        desc: "यह दर्शाने के लिए डिज़ाइन किया गया है कि जिम्मेदार AI, बहुभाषी पहुंच और पारदर्शी नागरिक वर्कफ़्लो समुदायों और नगर पालिकाओं के बीच सहयोग को कैसे मजबूत कर सकते हैं।",
      },
      challenge_tag: "Google Solution Challenge के लिए ❤️ के साथ बनाया गया",
      privacy: "गोपनीयता",
      terms: "शर्तें",
      contact: "संपर्क",
      copyright: "© {{year}} कम्युनिटी हीरो। सर्वाधिकार सुरक्षित।",
    },
    landing: {
      hero: {
        eyebrow: "एआई-संचालित नागरिक खुफिया मंच",
        tagline: "एक रिपोर्ट। छह एआई एजेंट। एक मजबूत समुदाय।",
        headline: {
          before: "जब पड़ोसी आवाज उठाते हैं, ",
          highlight: "तो समुदाय बदलते हैं।",
        },
        description: "कम्युनिटी हीरो एक ही फोटो और वॉयस नोट को एक सत्यापित, प्राथमिकता वाले, ट्रैक करने योग्य नागरिक कार्य में बदल देता है—ताकि हर रिपोर्ट सही अधिकारी तक पहुंचे और हर निवासी सूचित रहे।",
        ctas: {
          primary: "समस्या दर्ज करें",
          secondary: "लाइव मैप देखें",
        },
        trust_badges: {
          "ai-powered": "एआई संचालित",
          "real-time": "रियल-टाइम ट्रैकिंग",
          "multilingual": "बहुभाषी समर्थन",
        },
      },
      problem: {
        eyebrow: "नागरिक समस्या",
        title: "रिपोर्टिंग से लोगों को जुड़ना चाहिए—कागजी कार्रवाई में नहीं दबना चाहिए",
        description: "अधिकांश शहर अभी भी फॉर्म, फोन ट्री और उम्मीदों पर चलते हैं। नागरिक एक बार रिपोर्ट करते हैं, फिर कुछ नहीं सुनते। विश्वास खत्म हो जाता है। समस्याएं बढ़ती जाती हैं। कम्युनिटी हीरो उस अंतर को पाटने के लिए है।",
        cards: {
          "black-hole": {
            title: "रिपोर्टें एक ब्लैक होल में गायब हो जाती हैं",
            description: "नागरिक समस्याओं को जमा करते हैं और कभी कोई अपडेट प्राप्त नहीं करते हैं। दृश्यता के बिना, लोग रिपोर्ट करना बंद कर देते हैं—और समस्याएं बिना जांचे बढ़ती हैं।",
          },
          "no-accountability": {
            title: "परिणाम की जिम्मेदारी कोई नहीं लेता",
            description: "विभाग एक-दूसरे को टिकट सौंपते हैं। निवासियों को यह दिखाई नहीं देता कि कौन जिम्मेदार है या काम कब शुरू होगा।",
          },
          "language-barrier": {
            title: "भाषा लोगों को बाहर कर देती है",
            description: "आधिकारिक पोर्टल अंग्रेजी प्रवाह और डिजिटल साक्षरता मान लेते हैं, जिससे वे समुदाय बाहर हो जाते हैं जिन्हें मदद की सबसे अधिक आवश्यकता होती है।",
          },
          "slow-response": {
            title: "तात्कालिकता अदृश्य है",
            description: "स्प्रेडशीट में एक गड्ढा और एक गैस रिसाव समान दिखाई देते हैं। बुद्धिमान प्राथमिकता के बिना, महत्वपूर्ण समस्याएं कतार में प्रतीक्षा करती हैं।",
          },
        },
      },
      solution: {
        eyebrow: "रिपोर्ट वर्कफ़्लो",
        title: "रिपोर्ट से समाधान तक",
        description: "कम्युनिटी हीरो हर रिपोर्ट को एक AI-सहायक नागरिक वर्कफ़्लो के माध्यम से निर्देशित करता है जो निवासियों, स्थानीय अधिकारियों और समुदायों को पारदर्शी समस्या समाधान की दिशा में सहयोग करने में मदद करता है।",
        flow: {
          citizen: {
            label: "नागरिक",
            detail: "एक फोटो लेता है, वॉयस नोट रिकॉर्ड करता है, या मानचित्र पिन टैप करता है",
          },
          agents: {
            label: "AI एजेंट",
            detail: "छह विशेष एजेंट रिपोर्ट का विश्लेषण, सत्यापन और रूटिंग करते हैं",
          },
          authorities: {
            label: "प्राधिकरण",
            detail: "वार्ड इंजीनियर और विभागों को प्राथमिकता वाले कार्य आदेश प्राप्त होते हैं",
          },
          community: {
            label: "समुदाय",
            detail: "पड़ोसी प्रगति ट्रैक करते हैं और साथ मिलकर सुधार सत्यापित करते हैं",
          },
          resolution: {
            label: "समाधान",
            detail: "समस्याएं प्रमाण के साथ बंद होती हैं—और विश्वास ब्लॉक दर ब्लॉक पुनर्निर्मित होता है",
          },
        },
      },
      agents: {
        eyebrow: "एआई एजेंट पाइपलाइन",
        title: "छह एजेंट। एक समन्वित वर्कफ़्लो।",
        description: "प्रत्येक क्षमता की नागरिक इनपुट को संरचित नागरिक जानकारी में बदलने में एक केंद्रित भूमिका होती है, जिसमें मानव-पठनीय स्पष्टीकरण और बुद्धिमान सहायता शामिल होती है।",
        badges: { future_enhancement: "भविष्य की सुविधा" },
        list: {
          vision: { title: "विज़न एजेंट", responsibility: "नागरिक रिपोर्टों से तस्वीरों और दृश्य साक्ष्यों का विश्लेषण करता है।" },
          geo: { title: "जियो एजेंट", responsibility: "मुद्दों को सटीक वार्ड सीमाओं और स्थलों पर मैप करता है।" },
          trust: { title: "वैलिडेशन एजेंट", responsibility: "रिपोर्ट की पूर्णता की पुष्टि करता है और प्रस्तुत करने से पहले संभावित डुप्लिकेट की पहचान में मदद करता है।" },
          priority: { title: "प्रायोरिटी एजेंट", responsibility: "तेजी से प्रतिक्रिया के लिए तात्कालिकता और सामुदायिक प्रभाव को रैंक करता है।" },
          prediction: { title: "भविष्य की भविष्यवाणी", responsibility: "ऐतिहासिक नगरपालिका पैटर्नों का उपयोग करके समस्या बढ़ने की प्रवृत्तियों का मूल्यांकन करने के लिए डिज़ाइन किया गया।" },
          copilot: { title: "सिटिज़न असिस्टेंट", responsibility: "बहुभाषी सहायता के माध्यम से नागरिकों का मार्गदर्शन करता है, निर्णयों की व्याख्या करता है, और समस्या ट्रैकिंग का समर्थन करता है।" },
        },
      },
      credibility: {
        title: "पारदर्शी नागरिक सहयोग के लिए निर्मित",
        description: "कम्युनिटी हीरो दर्शाता है कि AI-सहायक वर्कफ़्लो, बहुभाषी पहुंच और पारदर्शी रिपोर्टिंग नागरिकों और स्थानीय अधिकारियों के बीच सहयोग को कैसे मजबूत कर सकते हैं।",
        cards: {
          ai: {
            title: "AI-सहायक रिपोर्टिंग",
            desc: "दृष्टि, स्थान और भाषण विश्लेषण के साथ रिपोर्ट को तुरंत वर्गीकृत, सारांशित और प्राथमिकता देता है।",
          },
          tracking: {
            title: "पारदर्शी ट्रैकिंग",
            desc: "संरचित प्रगति समयरेखाओं के माध्यम से निवासियों और अधिकारियों को वास्तविक समय में अपडेट रखता है।",
          },
          i18n: {
            title: "बहुभाषी पहुंच",
            desc: "इंटरफ़ेस को एकीकृत Speech-to-Text इनपुट के साथ 8 क्षेत्रीय भाषाओं में अनुवाद करता है।",
          },
          verification: {
            title: "सामुदायिक सत्यापन",
            desc: "सत्यापित स्थानीय निर्देशांक और बहु-पड़ोसी पुष्टि के माध्यम से नगरपालिका विश्वास बनाता है।",
          },
        },
      },

      live_tracking: {
        eyebrow: "लाइव ट्रैकिंग पूर्वावलोकन",
        title: "हर रिपोर्ट। हर स्थिति। वास्तविक समय में।",
        description: "निवासी और अधिकारी एक पारदर्शी डैशबोर्ड साझा करते हैं—ताकि किसी को भी यह पूछने के लिए हेल्पलाइन पर कॉल न करना पड़े कि उनकी रिपोर्ट का क्या हुआ।",
        sampleLabel: "नमूना डैशबोर्ड पूर्वावलोकन",
        labels: {
          engineerStatus: "इंजीनियर स्थिति",
          eta: "अनुमानित समय",
          verification: "सामुदायिक सत्यापन",
          progress: "प्रगति",
        },
        issue: {
          category: "सड़क मरम्मत",
          ward: "वार्ड १८",
          engineerStatus: "इंजीनियर नियुक्त — निरीक्षण पूर्ण",
          eta: "अनुमानित समाधान: ४ दिन",
          verification: "५ में से ३ पड़ोसियों ने स्थल पर पुष्टि की",
        },
      },
      twin: {
        eyebrow: "सामुदायिक डिजिटल ट्विन",
        title: "आपका पड़ोस, मापा और समझा हुआ",
        description: "एआई रिपोर्टों, समाधानों और सामुदायिक प्रतिक्रिया को सक्रिय स्वास्थ्य स्कोर में संश्लेषित करता है—नेताओं और निवासियों को नागरिक कल्याण की एक साझा तस्वीर देता है।",
        demoLabel: "एआई-जनित नमूना स्कोर",
        scores: {
          infrastructure: {
            label: "बुनियादी ढांचा",
            trend: "+3 इस महीने",
          },
          safety: {
            label: "सुरक्षा",
            trend: "+5 इस महीने",
          },
          cleanliness: {
            label: "स्वच्छता",
            trend: "+2 इस महीने",
          },
          water: {
            label: "पानी",
            trend: "स्थिर",
          },
          health: {
            label: "सामुदायिक स्वास्थ्य",
            trend: "+4 इस महीने",
          },
        },
      },
      google: {
        eyebrow: "तकनीकी स्टैक",
        title: "एआई और खुले मानकों द्वारा संचालित आधुनिक तकनीकी स्टैक",
        description: "कम्युनिटी हीरो सुरक्षित, बहुभाषी, एआई-सहायक नागरिक रिपोर्टिंग प्रदान करने के लिए Google एआई, फायरबेस बुनियादी ढांचे और ओपन-सोर्स तकनीकों को जोड़ता है।",
        technologies: {
          "ai-studio": {
            category: "एआई प्लेटफॉर्म",
            title: "Google AI Studio",
            description: "जैमनी पूरे प्लेटफॉर्म पर एआई-सहायक दृष्टि विश्लेषण, बहुभाषी समझ, बुद्धिमान सारांश और सामुदायिक सहायता को शक्ति प्रदान करता है।"
          },
          firebase: {
            category: "बैकएंड",
            title: "Firebase",
            description: "फायरबेस प्रमाणीकरण, फायरस्टोर डेटाबेस, सुरक्षित भंडारण और वास्तविक समय सिंक्रनाइज़ेशन संपूर्ण एप्लिकेशन बैकएंड को शक्ति प्रदान करते हैं।"
          },
          maps: {
            category: "इंटरैक्टिव मानचित्र",
            title: "OpenStreetMap + Leaflet",
            description: "इंटरैक्टिव ओपन-सोर्स मानचित्र समस्या स्थान, वार्ड सीमाएं और लाइव भौगोलिक विज़ुअलाइज़ेशन प्रदान करते हैं।"
          },
          speech: {
            category: "ब्राउज़र एपीआई",
            title: "Web Speech API",
            description: "ब्राउज़र-मूल स्पीच-टू-टेक्स्ट और टेक्स्ट-टू-स्पीच आवाज-आधारित समस्या रिपोर्टिंग और पहुंच को सक्षम बनाते हैं।"
          },
          translate: {
            category: "बहुभाषी",
            title: "एआई संचालित बहुभाषी अनुवाद",
            description: "जैमनी-संचालित बहुभाषी अनुवाद नागरिकों को उनकी पसंदीदा भाषा में कम्युनिटी हीरो के साथ बातचीत करने में सक्षम बनाता है।"
          },
          analytics: {
            category: "विज़ुअलाइज़ेशन",
            title: "सामुदायिक विश्लेषण डैशबोर्ड",
            description: "इंटरैक्टिव डैशबोर्ड समस्या के आंकड़े, श्रेणी के रुझान, प्रतिक्रिया समयसीमा, एआई अंतर्दृष्टि और सामुदायिक स्वास्थ्य संकेतकों की कल्पना करते हैं।"
          }
        }
      },
      impact: {
        eyebrow: "सामुदायिक प्रभाव",
        title: "पारदर्शिता से आने वाला अंतर",
        description: "जब नागरिक प्रगति देखते हैं, तो वे अधिक रिपोर्ट करते हैं, अधिक स्वयंसेवा करते हैं और अधिक भरोसा करते हैं। ये संख्याएं दर्शाती हैं कि क्या संभव हो जाता है।",
        demoLabel: "प्रदर्शन के लिए नमूना आँकड़े",
        stats: {
          solved: {
            label: "मुद्दे हल किए गए",
          },
          citizens: {
            label: "नागरिकों की मदद की",
          },
          volunteer: {
            label: "स्वयंसेवक घंटे",
          },
          resolution: {
            label: "समाधान दर",
          },
        },
      },
      final_cta: {
        title: "क्या आप प्रभाव डालने के लिए तैयार हैं?",
        description: "आज ही एक स्वच्छ, सुरक्षित और अधिक उत्तरदायी समुदाय बनाने में अपने पड़ोसियों के साथ शामिल हों।",
        ctas: {
          primary: "मुद्दे की रिपोर्ट करें",
          secondary: "लाइव मैप देखें",
        },
      },
    },
    dashboard: {
      title: "डैशबोर्ड",
      subtitle: "आपका नागरिक प्रभाव",
      description: "अपनी नवीनतम प्रस्तुतियों की समीक्षा करें, स्थिति को ट्रैक करें, और देखें कि आपकी रिपोर्टें सामुदायिक प्रक्रिया के माध्यम से कैसे आगे बढ़ रही हैं।",
      stats: {
        totalReports: "कुल रिपोर्टें",
        pending: "लंबित",
        assigned: "आवंटित",
        inProgress: "प्रगति पर",
        resolved: "हल किया गया",
      },
      gamification: {
        levelProgress: "अगले स्तर के लिए प्रगति",
        pointsRequired: "अगले स्तर {{level}} तक पहुंचने के लिए {{points}} अंक चाहिए",
        dailyStreak: "दैनिक स्ट्रीक",
        streakDays: "{{days}} दिन",
        streakTip: "अपनी स्ट्रीक बनाए रखने के लिए दैनिक लॉगिन करें!",
        badgesEarned: "अर्जित बैज",
        badgesTip: "अंक अर्जित करने के लिए उपलब्धियों को अनलॉक करें!",
        cityRank: "शहर रैंक",
        rankTip: "वैश्विक बोर्ड पर आपका स्थान",
        badgesTitle: "नागरिक बैज",
        badgesSubtitle: "सामुदायिक स्वच्छता और रिपोर्ट ट्रैकिंग में योगदान देकर बैज अर्जित करें।",
        pts: "अंक",
        badge: "बैज",
        badges: "बैज",
      },
      leaderboard: {
        title: "शहर लीडरबोर्ड",
        subtitle: "शीर्ष 10 नायक",
        empty: "बोर्ड पर अभी तक कोई नायक नहीं है।",
        pts: "अंक",
      },
      performance: {
        title: "प्रदर्शन",
        description: "एआई विश्लेषण मेट्रिक्स और प्राथमिकता वितरण।",
        verifiedByAi: "एआई द्वारा सत्यापित",
        verifiedTip: "एआई विश्लेषण वाली रिपोर्टें",
        highPriority: "उच्च प्राथमिकता",
        highPriorityTip: "प्राथमिकता स्कोर ≥ 80",
        averagePriority: "औसत प्राथमिकता",
        averagePriorityTip: "एआई रिपोर्टों का औसत स्कोर",
        averageConfidence: "औसत एआई विश्वास",
        averageConfidenceTip: "एआई प्रसंस्करण का विश्वास",
      },
      recentReports: {
        title: "हाल की रिपोर्टें",
        subtitle: "आपके द्वारा प्रस्तुत नवीनतम मुद्दे।",
        loading: "आपकी रिपोर्ट लोड हो रही है...",
        empty: "अभी तक कोई रिपोर्ट नहीं मिली। प्रगति पर नज़र रखने के लिए अपनी पहली रिपोर्ट सबमिट करें।",
      },
    },
    reportForm: {
      title: "एक नागरिक समस्या की रिपोर्ट करें",
      description: "समस्या का चित्र या लघु वीडियो अपलोड करें। हमारा एआई साक्ष्य का विश्लेषण करेगा और उचित विभाग की सिफारिश करेगा।",
      uploadTitle: "साक्ष्य अपलोड करें",
      uploadTip: "समर्थित प्रारूप: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "विवरण",
      descPlaceholder: "नागरिक समस्या का वर्णन करें... (आप माइक्रोफ़ोन बटन पर क्लिक करके भी बोल सकते हैं)",
      categoryLabel: "श्रेणी",
      locationStatus: "स्थान की स्थिति",
      locationDetail: {
        waiting: "ब्राउज़र अनुमति की प्रतीक्षा की जा रही है...",
        denied: "स्थान की अनुमति अस्वीकार कर दी गई। आप अभी भी बिना किसी स्थान के सबमिट कर सकते हैं।",
        detected: "स्थान का पता चल गया",
        requesting: "स्थान का अनुरोध किया जा रहा है...",
      },
      locationCard: {
        address: "पता",
        latitude: "अक्षांश",
        longitude: "देशांतर",
        city: "शहर",
        region: "क्षेत्र",
        accuracy: "सटीकता: {{accuracy}} मीटर",
      },
      buttons: {
        analyze: "एआई के साथ विश्लेषण करें",
        analyzing: "विश्लेषण किया जा रहा है...",
        complete: "✓ एआई विश्लेषण पूर्ण",
        submit: "रिपोर्ट सबमिट करें",
        submitting: "सबमिट किया जा रहा है...",
        reset: "रीसेट करें",
      },
      speech: {
        start: "आवाज रिकॉर्डिंग शुरू करें",
        stop: "आवाज रिकॉर्डिंग रोकें",
        unsupported: "वॉयस-टू-टेक्स्ट आपके ब्राउज़र द्वारा समर्थित नहीं है।",
      },
    },
    reports: {
      title: "मेरी रिपोर्टें",
      subtitle: "रिपोर्ट इतिहास",
      description: "आपके द्वारा प्रस्तुत हर मुद्दे को ब्राउज़ करें और समीक्षा प्रक्रिया से स्थिति अपडेट देखें।",
      loading: "आपकी रिपोर्ट लोड हो रही है...",
      empty: {
        line1: "आपने अभी तक कोई रिपोर्ट सबमिट नहीं की है।",
        line2: "एक नया मुद्दा दर्ज करने के लिए रिपोर्ट पेज पर जाएं।",
      },
    },
    reportDetail: {
      title: "रिपोर्ट विवरण",
      subtitle: "लाइव ट्रैकिंग",
      description: "इस रिपोर्ट के लिए वर्तमान स्थिति, विश्लेषण, समयरेखा और विभाग आवंटन की समीक्षा करें।",
      created: "बनाया गया",
      lastUpdated: "अंतिम अद्यतन",
      location: "स्थान",
      noLocation: "स्थान उपलब्ध नहीं है",
      assignedDept: "आवंटित विभाग",
      notAssigned: "आवंटित नहीं",
      aiAnalysis: {
        title: "एआई विश्लेषण",
        category: "श्रेणी",
        department: "विभाग",
        severity: "तीव्रता",
        priority: "प्राथमिकता स्कोर",
        confidence: "एआई विश्वास",
        summary: "सारांश",
        empty: "इस रिपोर्ट के लिए कोई एआई विश्लेषण उपलब्ध नहीं है।",
        translating: "सारांश का अनुवाद किया जा रहा है...",
      },
      speech: {
        read: "सामग्री जोर से पढ़ें",
        stop: "पढ़ना बंद करें",
      },
      notFound: {
        title: "रिपोर्ट नहीं मिली",
        description: "वह रिपोर्ट जिसे आप देखने का प्रयास कर रहे हैं उसका अस्तित्व नहीं है या आपको इसे देखने की अनुमति नहीं है।",
        back: "रिपोर्ट पर वापस जाएं",
      },
    },
    tracking: {
      progress: {
        title: "रिपोर्ट प्रगति",
        description: "अपनी रिपोर्ट के वर्तमान चरण को ट्रैक करें।",
      },
      timeline: {
        title: "ट्रैकिंग टाइमलाइन",
        description: "हाल के अपडेट समय के अनुसार दिखाए गए हैं।",
      },
      status: {
        submitted: "नागरिक द्वारा रिपोर्ट दर्ज की गई।",
        assigned: "रिपोर्ट संबंधित विभाग को भेज दी गई।",
        inspectionStarted: "निरीक्षण पूरा हुआ, कार्य प्रारंभ हो गया।",
        inProgress: "कार्य प्रगति पर है",
        verified: "एआई सत्यापन पूरा हुआ",
        resolved: "समस्या का समाधान कर दिया गया है",
        closed: "रिपोर्ट बंद की गई",
        Pending: "लंबित",
        Verified: "सत्यापित",
        Assigned: "आवंटित",
        "In Progress": "प्रगति पर",
        Resolved: "हल किया गया",
        "Issue submitted": "समस्या दर्ज की गई",
        "AI verification completed": "एआई सत्यापन पूर्ण हुआ",
        "Assigned to department": "विभाग को आवंटित किया गया",
        "Work started": "कार्य शुरू हुआ",
        "Issue resolved": "समस्या का समाधान हुआ",
      },
    },
    liveMap: {
      title: "लाइव सामुदायिक मानचित्र",
      subtitle: "रियल-टाइम रिपोर्टिंग",
      description: "वास्तविक समय में पूरे समुदाय में चल रहे नागरिक मुद्दों को देखें और ट्रैक करें।",
      statistics: "आंकड़े",
      legend: "संकेत संकेत",
      filters: {
        category: "सभी श्रेणियां",
        status: "सभी स्थितियाँ",
        all: "सभी",
      },
      popup: {
        department: "आवंटित विभाग",
        priority: "प्राथमिकता स्कोर",
        severity: "तीव्रता",
        confidence: "एआई विश्वास",
        address: "पता",
        time: "रिपोर्ट किया गया समय",
        button: "लाइव ट्रैकिंग देखें →",
      },
      empty: {
        title: "कोई नागरिक रिपोर्ट उपलब्ध नहीं है।",
        description: "कोई भी सक्रिय रिपोर्ट चयनित फ़िल्टर से मेल नहीं खाती है या उसमें भू-स्थान विवरण नहीं है। बाद में पुनः देखें या एक नई रिपोर्ट सबमिट करें।",
      },
      connecting: "फायरस्टोर से कनेक्ट किया जा रहा है...",
      loading: "इंटरैक्टिव मानचित्र लोड हो रहा है...",
    },
    badges: {
      first_report: {
        name: "पहली रिपोर्ट",
        description: "अपनी पहली नागरिक रिपोर्ट प्रस्तुत की।",
      },
      five_reports: {
        name: "5 रिपोर्टें",
        description: "पांच नागरिक रिपोर्ट प्रस्तुत कीं।",
      },
      ten_reports: {
        name: "10 रिपोर्टें",
        description: "दस नागरिक रिपोर्ट प्रस्तुत कीं।",
      },
      points_100: {
        name: "100 हीरो अंक",
        description: "100 हीरो अंक तक पहुंचे।",
      },
      points_500: {
        name: "500 हीरो अंक",
        description: "500 हीरो अंक तक पहुंचे।",
      },
      streak_7: {
        name: "7 दिन की स्ट्रीक",
        description: "7 दिन की सक्रिय स्ट्रीक बनाए रखी।",
      },
      clean_city_hero: {
        name: "स्वच्छ शहर नायक",
        description: "शहर को साफ करने में मदद के लिए एक रिपोर्ट प्रस्तुत की।",
      },
      traffic_guardian: {
        name: "यातायात संरक्षक",
        description: "यातायात संकेत या सुरक्षा मुद्दों की रिपोर्ट की।",
      },
      environment_protector: {
        name: "पर्यावरण रक्षक",
        description: "पानी के रिसाव या सीवरेज के मुद्दों की रिपोर्ट की।",
      },
      community_starter: {
        name: "कम्युनिटी स्टार्टर",
      },
      civic_volunteer: {
        name: "नागरिक स्वयंसेवक",
      },
      community_guardian: {
        name: "कम्युनिटी गार्जियन",
      },
      city_hero: {
        name: "सिटी हीरो",
      },
      civic_champion: {
        name: "नागरिक चैंपियन",
      },
      community_legend: {
        name: "कम्युनिटी लीजेंड",
      },
    },
    toasts: {
      badgeUnlocked: "बैज अनलॉक हो गया",
      pointsAwarded: "+{{points}} हीरो अंक",
    },
    categories: {
      Roads: "सड़कें",
      Garbage: "कचरा",
      Water: "पानी",
      Traffic: "यातायात",
      "Street Lights": "स्ट्रीट लाइट",
      Safety: "सुरक्षा",
      Other: "अन्य",
    },
    departments: {
      "Public Works Department": "लोक निर्माण विभाग",
      "Municipal Corporation": "नगर निगम",
      "Water Department": "जल विभाग",
      "Traffic Police": "यातायात पुलिस",
      "Electricity Department": "विद्युत विभाग",
      "Public Safety": "सार्वजनिक सुरक्षा",
      "Environment Department": "पर्यावरण विभाग",
      "Awaiting Assignment": "आवंटन की प्रतीक्षा है",
    },
    severity: {
      Low: "कम",
      Medium: "मध्यम",
      High: "उच्च",
      Critical: "गंभीर",
      Pending: "लंबित",
    },
    admin: {
      title: "Municipal Authority Panel",
      subtitle: "Manage reports, assign departments, and track resolution metrics.",
      menu: {
        dashboard: "Dashboard",
        reports: "Reports",
        users: "Users",
        analytics: "Analytics",
      },
      dashboard: {
        total: "Total Reports",
        pending: "Pending",
        verified: "Verified",
        assigned: "Assigned",
        inProgress: "In Progress",
        resolved: "Resolved",
        highPriority: "High Priority",
        today: "Today's Reports",
        recentTitle: "Recent Activity",
        viewAll: "View All Reports",
        quickActions: "Quick Links",
        manageReports: "Manage Reports",
        manageUsers: "Manage Users",
        viewAnalytics: "View Analytics",
      },
      reports: {
        search: "Search reports...",
        allStatuses: "All Statuses",
        allCategories: "All Categories",
        allDepartments: "All Departments",
        allPriorities: "All Priorities",
        newest: "Newest First",
        oldest: "Oldest First",
        showing: "Showing",
        of: "of",
        results: "results",
        empty: "No reports found",
        emptyHint: "Try adjusting your filters or search terms.",
      },
    },
  },
};

const gu = {
  translation: {
    auth: {
      badge: "કમ્યુનિટી હીરો • સુરક્ષિત કાર્યસ્થળ",
      title: "કમ્યુનિટી હીરોની સુરક્ષિત ઍક્સેસ",
      description: "નાગરિક સમસ્યાઓની ફરિયાદ કરવા, રિપોર્ટની પ્રગતિને ટ્રેક કરવા, તમારા સમુદાય સાથે સહયોગ કરવા અને તમારા વ્યક્તિગત ડેશબોર્ડને ઍક્સેస్ કરવા માટે તમારા ગૂગલ એકાઉન્ટનો ઉપયોગ કરીને સુરક્ષિત રીતે સાઇન ઇન કરો.",
      signInButton: "ગૂગલ સાથે સાઇન ઇન કરો",
      signingIn: "સાઇન ઇન થઈ રહ્યું છે...",
      backToHome: "હોમ પેજ પર પાછા ફરો",
      indicators: {
        secure: "સુરક્ષિત લોગીન",
        tracking: "રિયલ-ટાઇમ ટ્રેકિંગ",
        ai: "AI સહાયિત વર્કફ્લો"
      }
    },
    privacy: {
      eyebrow: "પ્રોજેક્ટ પોલિસી",
      title: "પ્રાઇવેસી પોલિસી",
      description: "કમ્યુનિટી હીરો કઈ માહિતીનો ઉપયોગ કરે છે અને આ ડેમો તેને કેવી રીતે હેન્ડલ કરે છે તેની સરળ ભાષામાં વિગત.",
      updated: "28 જૂન 2026",
      sections: {
        data_collection: {
          title: "ડેટા કલેક્શન",
          description: "કમ્યુનિટી હીરો નાગરિક રિપોર્ટિંગના ડેમો ચલાવવા માટે જરૂરી માહિતી એકત્રિત કરે છે. આમાં તમારું ગૂગલ એકાઉન્ટ નામ, ઈમેલ સરનામું, રિપોર્ટ વર્ણન, કેટેગરી, રિપોર્ટની સ્થિતિ અને ટેકનિકલ ટાઇમસ્ટેમ્પ શામેલ હોઈ શકે છે."
        },
        authentication: {
          title: "પ્રમાણીકરણ",
          description: "ગૂગલ સાઇન-ઇન ફાયરબેઝ ઓથેન્ટિકેશન દ્વારા સંચાલિત થાય છે. કમ્યુનિટી હીરો રિપોર્ટ્સને તમારા એકાઉન્ટ સાથે લિંક કરવા માટે તમારા પ્રમાણિત યુઝર આઈડીનો ઉપયોગ કરે છે. આ એપ્લિકેશન દ્વારા પાસવર્ડ ક્યારેય લેવા કે સ્ટોર કરવામાં આવતા નથી."
        },
        firebase: {
          title: "ફાયરબેઝ ઉપયોગ",
          description: "ફાયરસ્ટોર એકાઉન્ટ-સંબંધિત પ્રોફાઇલ માહિતી, સબમિટ કરેલા રિપોર્ટની વિગતો, AI વિશ્લેષણ પરિણામો, લોકેશન વિગતો અને રિપોર્ટ સ્ટેટસ હિસ્ટ્રી સ્ટોર કરે છે."
        },
        location: {
          title: "લોકેશન પરવાનગીઓ",
          description: "જ્યારે તમે રિપોર્ટિંગ સુવિધાઓનો ઉપયોગ કરો ત્યારે તમારા બ્રાઉઝર દ્વારા લોકેશન ઍક્સેસ માટે વિનંતી કરવામાં આવે છે. જો મંજૂર કરવામાં આવે, તો કોઓર્ડિનેટ્સ અને મેળવેલ સરનામું તમારા રિપોર્ટમાં શામેल હોઈ શકે છે."
        },
        media: {
          title: "ઇમેજ અને વિડિયો સિલેક્શન",
          description: "તમે પસંદ કરેલ મીડિયાનો ઉપયોગ AI-સહાયિત વિશ્લેષણ વિનંતી માટે થાય છે. વર્તમાન રિપોર્ટ રેકોર્ડ માત્ર મીડિયા પ્રકાર અને વિશ્લેષણ સ્ટોર કરે છે; તે ઓરિજિનલ ફાઇલ ફાયરસ્ટોરમાં સ્ટોર કરતું નથી."
        },
        voice: {
          title: "વોઇસ ઇન્ટરેક્શન",
          description: "સ્પીચ-ટુ-ટેક્સ્ટ અને ટેક્સ્ટ-ટુ-સ્પીચ બ્રાઉઝરની વેબ સ્પીચ ક્ષમતાઓનો ઉપયોગ કરે છે. કમ્યુનિટી હીરો ઓરિજિનલ વૉઇસ રેકોર્ડિંગ્સ ક્યારેય સ્ટોર કરતું નથી."
        },
        cookies: {
          title: "કુકીઝ અને લોકલ સ્ટોરેજ",
          description: "ફાયરબેઝ ઓથેન્ટિકેશન તમારું લોગિન સેશન ચાલુ રાખવા માટે બ્રાઉઝર સ્ટોરેજનો ઉપયોગ કરી શકે છે. આ પ્રોજેક્ટમાં કોઈપણ જાહેરાત કૂકીઝ શામેલ નથી."
        },
        contact: {
          title: "સંપર્ક",
          description: "પ્રાઇવેસી પ્રશ્નો માટે સંપર્ક પેજનો ઉપયોગ કરો. સાર્વજનિક પ્રોજેક્ટ ઈમેલ હાલમાં ડેમો પ્લેસહોલ્ડર છે."
        }
      }
    },
    terms: {
      eyebrow: "પ્રોજેક્ટની શરતો",
      title: "સેવાની શરતો",
      description: "કમ્યુનિટી હીરો અને તેના AI-સહાયિત રિપોર્ટિંગના જવાબદાર ઉપયોગ માટે વ્યવહારુ શરતો.",
      updated: "28 જૂન 2026",
      sections: {
        acceptable_use: {
          title: "સ્વીકાર્ય ઉપયોગ",
          description: "કમ્યુનિટી હીરોનો ઉપયોગ માત્ર કાયદેસર નાગરિક રિપોર્ટિંગ માટે કરો. કોઈ હેરાનગતિ, ગેરકાયદે સામગ્રી અથવા ઈરાદાપૂર્વક ખોટા અહેવાલો સબમિટ કરશો નહીં."
        },
        user_resp: {
          title: "વપરાશકર્તાની જવાબદારીઓ",
          description: "તમે સબમિટ કરેલી માહિતીની સચોટતા માટે તમે પોતે જ જવાબદાર છો. બિનજરૂરી અંગત માહિતી આપવાનું ટાળો."
        },
        ownership: {
          title: "સામગ્રીની માલિકી",
          description: "તમે બનાવેલી સામગ્રીની માલિકી તમારી પાસે રહે છે. રિપોર્ટ સબમિટ કરીને, તમે પ્રોજેક્ટને તેનું વિશ્લેષણ અને પ્રદર્શન કરવાની મંજૂરી આપો છો."
        },
        disclaimer: {
          title: "AI સહાય અસ્વીકરણ",
          description: "AI પરિણામ અપૂર્ણ లేదా తప్పు కావచ్చు. કોઈ ગંભીર નિર્ણય લેતા પહેલા તે લોકો દ્વારા ચકાસવું જરૂરી છે."
        },
        notice: {
          title: "મ્યુનિસિપલ ડેમો નોટિસ",
          description: "કમ્યુનિટી હીરો એ સોલ્યુશન ચેલેન્જ પ્રોજેક્ટ છે. રિપોર્ટ સબમिट કરવાથી કોઈ સત્તાવાર સરકારી ચેનલ બદલાતી નથી.",
          item1: "કટોકટી માટે કમ્યુનિટી હીરોનો ઉપયોગ કરશો નહીં.",
          item2: "જ્યારે તાત્કાલિક જોખમ હોય ત્યારે સ્થાનિક કટોકટી સેવાઓનો ઉપયોગ કરો.",
          item3: "ડેમો મેટ્રિક્સ અને સામુદાયિક આરોગ્ય સૂચકાંકો માત્ર ઉદાહરણો છે."
        },
        liability: {
          title: "જવાબદારીની મર્યાદા",
          description: "આ પ્રોજેક્ટ કોઈપણ ગેરંટી વિના મૂલ્યાંકન માટે પ્રદાન કરવામાં આવ્યો છે."
        }
      }
    },
    contact: {
      eyebrow: "પ્રોજેક્ટ સંપર્ક",
      title: "ચાલો વધુ સક્રિય સમુદાયો બનાવીએ",
      description: "કમ્યુનિટી હીરો એ સંશોધન કરે છે કે કેવી રીતે AI-સહાયિત નાગરિક અહેવાલો રહેવાસીઓ અને સ્થાનિક અધિકારીઓને પારદર્શક સમસ્યા નિવારણ માટે સહયોગ કરવામાં મદદ કરે છે.",
      challenge: {
        title: "Google Solution Challenge",
        desc: "કમ્યુનિટી હીરો દર્શાવે છે કે કેવી રીતે જવાબદાર AI નાગરિકો અને સત્તાવાળાઓ વચ્ચે પારદર્શિતા, સુલભતા અને સહયોગમાં સુધારો કરી શકે છે."
      },
      developer: {
        title: "પ્રોજેક્ટ ડેવલપર",
        name: "શ્રેષ્ઠા સ્વામી",
        degree: "બી.ટેક કમ્પ્યુટર સાયન્સ એન્ડ એન્જિનિયરિંગ (ડેટા સાયન્સ)",
        institution: "SKIT જયપુર",
        focus: "AI • ડેટા સાયન્સ • સિવિક ટેકનોલોજી"
      },
      links: {
        title: "ડેવલપર સાથે જોડાઓ",
        github: "GitHub પ્રોફાઇલ",
        linkedin: "LinkedIn પ્રોફાઇલ",
        note: "સહયોગ, સંશોધનની તકો અને સિવિક ટેકનોલોજી ચર્ચાઓ માટે ખુલ્લા છે."
      },
      form: {
        successTitle: "સંદેશ તૈયાર થયો",
        successMessage: "આ ડેમો ફોર્મ બેકએન્ડ પર ડેટા મોકલતું નથી. પ્રોડક્શન શરૂ કરતા પહેલા યોગ્ય ઇનબૉક્સ લિંક કરો.",
        backText: "ફોર્મ પર પાછા ફરો",
        name: "નામ",
        email: "ઈમેલ",
        subject: "વિષય",
        message: "સંદેશ",
        placeholderName: "જોન ડો",
        placeholderEmail: "john@example.com",
        placeholderSubject: "અમે તમને કેવી રીતે મદદ કરી શકીએ?",
        placeholderMessage: "અમને વધુ વિગતો જણાવો...",
        demoText: "ફક્ત UI પ્રદર્શન—આ ફોર્મ તમારા સંદેશને મોકલતું કે સંગ્રહ કરતું નથી.",
        submitButton: "સંદેશ તૈયાર કરો"
      },
      faq: {
        eyebrow: "ઝડપી જવાબો",
        title: "વારંવાર પૂછાતા પ્રશ્નો",
        q1: "શું કમ્યુનિટી હીરો સત્તાવાર સરકારી સેવા છે?",
        a1: "ના. કમ્યુનિટી હીરો હાલમાં ગૂગલ સોલ્યુશન ચેલેન્જ પ્રોજેક્ટ અને ડેમો છે."
      }
    },

    common: {
      loading: "લોડ થઈ રહ્યું છે...",
      error: "ભૂલ",
      reset: "રીસેટ કરો",
      submit: "સબમિટ કરો",
      cancel: "રદ કરો",
      back: "પાછા જાઓ",
      retry: "ફરી પ્રયાસ કરો",
      progress: "પ્રગતિ",
      chooseFile: "ફાઇલ પસંદ કરો",
      camera: "કેમેરા",
      dragDrop: "અહીં છબી અથવા વિડિઓ ખેંચો અને છોડો",
      viewLiveTracking: "લાઇવ ટ્રેકિંગ જુઓ",
      play: "ચલાવો",
      pause: "થોભાવો",
      resume: "ફરી શરૂ કરો",
      stop: "બંધ કરો",
      preview: "પૂર્વાવલોકન",
      remove: "દૂર કરો",
    },
    navbar: {
      home: "હોમ",
      report: "સમસ્યાની રિપોર્ટ કરો",
      map: "લાઇવ મેપ",
      dashboard: "ડેશબોર્ડ",
      myReports: "મારી રિપોર્ટ્સ",
      login: "ગૂગલથી સાઇન ઇન કરો",
      logout: "લોગઆઉટ",
      adminPanel: "એડમિન પેનલ",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      about: {
        title: "ˉCommunity ˉHero ˉvishe",
        desc: "ˉCommunity ˉHero ˉek ˉAI-sahayit ˉnagarik ˉreˉporting ˉplatˉform ˉche ˉje ˉnagarikone ˉane ˉsthanik ˉsattadhikaˉriyone ˉparaˉdarshak ˉsamasya ˉreporting, ˉbahubhashi ˉpravesh ˉane ˉvastavik-samay ˉpragati ˉtreˉking ˉdvara ˉsahˉkarˉ ˉkaˉrva ˉsˉaksham ˉbanave ˉche.",
      },
      tech: {
        title: "ˉTechnology ˉStack",
        items: {
          nextjs: "Next.js 16",
          react: "React + TypeScript",
          firebase: "Firebase + Firestore",
          ai: "Google AI Studio",
          maps: "OpenStreetMap + Leaflet",
          tailwind: "Tailwind CSS",
        },
      },
      quick_links: { title: "ˉJaldi ˉLinkˉs" },
      recognition: {
        title: "ˉManˉyata",
        badge: "Google Solution Challenge 2026",
        desc: "ˉJimmedˉar ˉAI, ˉbahubhashi ˉpravesh ˉane ˉparaˉdarshak ˉnagarik ˉworkflowˉs ˉsamudayˉo ˉane ˉnaˉgarpaˉlikaoˉ vacche sahkˉar ˉne ˉkevi ˉrite ˉmˉazbut ˉˉkari ˉshke ˉche ˉte ˉdarsˉhavva ˉmate ˉdˉizˉain ˉkaˉrel.",
      },
      challenge_tag: "Google Solution Challenge ˉmate ˉ❤️ ˉsˉathe ˉbanˉaˉvel",
      privacy: "ગોપનીયતા",
      terms: "શરતો",
      contact: "સંપર્ક",
      copyright: "© {{year}} કોમ્યુનિટી હીરો. સર્વાધિકાર સુરક્ષિત.",
    },
    landing: {
      hero: {
        eyebrow: "AI-સંચાલિત નાગરિક ગુપ્તચર મંચ",
        tagline: "એક રિપોર્ટ. છ AI એજન્ટ્સ. એક મજબૂત સમુદાય.",
        headline: {
          before: "જ્યારે પડોશીઓ અવાજ ઉઠાવે છે, ",
          highlight: "ત્યારે સમુદાયો બદલાય છે.",
        },
        description: "કોમ્યુનિટી હીરો એક જ ફોટો અને વોઇસ નોટને ચકાસાયેલ, અગ્રતાવાળા, ટ્રેક કરી શકાય તેવા નાગરિક કાર્યમાં ફેરવે છે—જેથી દરેક રિપોર્ટ યોગ્ય સત્તાધિકારી સુધી પહોંચે અને દરેક રહેવાસી માહિતગાર રહે.",
        ctas: {
          primary: "સમસ્યા નોંધાવો",
          secondary: "લાઇવ મેપ જુઓ",
        },
        trust_badges: {
          "ai-powered": "AI સંચાલિત",
          "real-time": "રિયલ-ટાઇમ ટ્રેકિંગ",
          "multilingual": "બહુભાષી સપોર્ટ",
        },
      },
      problem: {
        eyebrow: "નાગરિક સમસ્યા",
        title: "રિપોર્ટિંગ લોકોને જોડવા માટે હોવું જોઈએ—કાગળના કામમાં દબાવવા માટે નહીં",
        description: "મોટાભાગના શહેરો હજી પણ ફોર્મ, ફોન ટ્રી અને આશા પર ચાલે છે. નાગરિકો એકવાર રિપોર્ટ કરે છે, પછી કંઈ સાંભળતા નથી. વિશ્વાસ તૂટી જાય છે. સમસ્યાઓ વધતી જાય છે. કોમ્યુનિટી હીરો તે અંતરને પૂરવા માટે છે.",
        cards: {
          "black-hole": {
            title: "અહેવાલો બ્લેક હોલમાં અદૃશ્ય થઈ જાય છે",
            description: "નાગરિકો સમસ્યાઓ સબમિટ કરે છે અને ક્યારેય કોઈ અપડેટ પ્રાપ્ત કરતા નથી. દૃશ્યતા વિના, લોકો રિપોર્ટ કરવાનું બંધ કરે છે—અને સમસ્યાઓ અનિયંત્રિત વધે છે.",
          },
          "no-accountability": {
            title: "પરિણામની જવાબદારી કોઈ લેતું નથી",
            description: "વિભાગો એકબીજાને ટિકિટો સોંપે છે. રહેવાસીઓ જોઈ શકતા નથી કે કોણ જવાબદાર છે કે કામ ક્યારે શરૂ થશે.",
          },
          "language-barrier": {
            title: "ભાષા લોકોને બહાર રાખે છે",
            description: "સત્તાવાર પોર્ટલ અંગ્રેજી પ્રવાહિતા અને ડિજિટલ સાક્ષરતા ધારી લે છે, જે મદદની સૌથી વધુ જરૂરિયાતવાળા સમુદાયોને બાકાત રાખે છે.",
          },
          "slow-response": {
            title: "તાકીદ અદૃશ્ય છે",
            description: "સ્પ્રેડશીટમાં એક ખાડો અને ગેસ લીકેજ સરખા દેખાય છે. બુદ્ધિશાળી વર્ગીકરણ વિના, મહત્વપૂર્ણ સમસ્યાઓ કતારમાં રાહ જુએ છે.",
          },
        },
      },
      solution: {
        eyebrow: "રિપોર્ટ વર્કફ્લો",
        title: "રિપોર્ટથી સમાધાન સુધી",
        description: "કમ્યુનિટી હીરો દરેક રિપોર્ટને AI-સહાયિત નાગરિક વર્કફ્લો દ્વારા માર્ગદર્શન આપે છે જે નિવાસીઓ, સ્થાનિક સત્તાધીશો અને સમુદાયોને પારદર્શક સમસ્યા નિવારણ તરફ સહકાર આપવામાં મદદ કરે છે.",
        flow: {
          citizen: {
            label: "નાગરિક",
            detail: "ફોટો લે છે, વૉઇસ નોટ રેકોર્ડ કરે છે, અથવા મેપ પિન ટૅપ કરે છે",
          },
          agents: {
            label: "AI એજન્ટ",
            detail: "છ વિશેષ એજન્ટ રિપોર્ટનું વિશ્લેષણ, ચકાસણી અને રૂટિંગ કરે છે",
          },
          authorities: {
            label: "સત્તાધિકારીઓ",
            detail: "વોર્ડ ઇજનેરો અને વિભાગોને પ્રાથમિક કાર્ય આદેશ પ્રાપ્ત થાય છે",
          },
          community: {
            label: "સમુદાય",
            detail: "પડોશીઓ પ્રગતિ ટ્રૅક કરે છે અને સાથે મળીને સુધારા ચકાસે છે",
          },
          resolution: {
            label: "સમાધાન",
            detail: "સમસ્યાઓ પ્રમાણ સાથે બંધ થાય છે—અને વિશ્વાસ બ્લૉક- બ્લૉક પુનઃ નિર્માણ થાય છે",
          },
        },
      },
      agents: {
        eyebrow: "AI એજન્ટ પાઇપલાઇન",
        title: "છ એજન્ટો. એક સંકલિત વર્કફ્લો.",
        description: "દરેક ક્ષમતા નાગરિક ઇન્પુટને સંરચિત નાગરિક માહિતીમાં રૂપાંતરિત કરવામાં કેન્દ્રિત ભૂમિકા ધરાવે છે, જેમાં માનવ-વાંચી શકાય તેવી સ્પષ્ટ સમજૂતીઓ અને બુદ્ધિશાળી સહાય છે.",
        badges: { future_enhancement: "ભવિષ્યની સુવિધા" },
        list: {
          vision: { title: "વિઝ઼ન એજન્ટ", responsibility: "નાગરિક અહેવાલોમાંથી ફોટા અને વિઝ્યુઅલ પુરાવાઓનું વિશ્લેષણ કરે છે." },
          geo: { title: "જિઓ એજન્ટ", responsibility: "વોર્ડની ચોક્કસ સીમાઓ અને સ્થળો સાથે સમસ્યાઓ મૅપ કરે છે." },
          trust: { title: "વૅલિડેશન એજન્ટ", responsibility: "અહેવાલ સ઼ ·ˉbmit ˉkar ·ˉva ˉpahela ˉteni ˉpurnata ˉtharavar ˉkare ˉche ˉane ˉsambhavit ˉduplicate ˉne ˉolakhvama ˉmadad ˉkare ˉche." },
          priority: { title: "પ્રાઇઓરિટી એજન્ટ", responsibility: "ઝ ·ˉdapathi ˉpratiˉsaad ˉ mate ˉtakeed ˉane ˉsamudaya ˉprabahav ˉne ˉrank ˉkare ˉche." },
          prediction: { title: "ભ ·ˉvishyani ˉBhavishyavani", responsibility: "Aitihasik ˉMunicipal ˉPattern ˉna ˉUpayog ˉkarine ˉsamasya ˉvadh ˉavana ˉvalanonu ˉmulyankan ˉkarava ˉmate ˉrachayelu ˉche." },
          copilot: { title: "Sitˉizan ˉAsistant", responsibility: "Bahubhashi ˉsahay ˉdvara ˉnagarikone ˉmargnirdesh ˉape ˉche, ˉnirnayo ˉsajhava ˉkare ˉche ˉane ˉsamasya ˉtreking ˉne ˉsamarthˉan ˉape ˉche." },
        },
      },
      credibility: {
        title: "પારદર્શી નાગરિક સહkarikal માટે નિર્મિત",
        description: "કમ્યુનિટી હીરો દર્શાવે છે કે AI-સહાયિત વર્કફ્લો, બહુભાષી પ્રવેશ અને પારદર્શી રિપોર્ટિંગ નાગરિકો અને સ્થાનિક સત્તાધિકારીઓ વચ્ચે સહkarikal ને કેવી રીતે મજ઼ ·ˉbut ˉkari ˉshake ˉche.",
        cards: {
          ai: {
            title: "AI-સહાયિત રિપોર્ટિંગ",
            desc: "દ ·ˉ ·ˉ ·ˉ ·ˉ ·ˉ ·ˉ ·ˉ ·ˉ ·ˉ ·ˉdrishti, ˉsthan ˉane ˉbhasha ˉvishleshan ˉsathe ˉriporth ˉne ˉtarikha, ˉsarvaiyun ˉane ˉpradhanyata ˉape ˉche.",
          },
          tracking: {
            title: "પારsdarsˉhi ˉTrˉeking",
            desc: "ˉS ·ˉanrachit ˉpragati ˉsamayrekhaˉo ˉdvara ˉnivasˉio ˉane ˉadhikˉario ˉne ˉvastavik ˉsˉamay ˉma ˉupdata ˉrˉakhe ˉche.",
          },
          i18n: {
            title: "ˉBahubhashi ˉPravesh",
            desc: "Ekikrit ˉSpeech-to-Text ˉinˉputˉ saˉthe ˉintˉerfˉace ˉne ˉ8 ˉpradˉeshik ˉbhashaˉoˉ ˉmˉa ˉanˉuˉvˉad ˉkˉare ˉche.",
          },
          verification: {
            title: "ˉSamudˉay ˉSaˉtyaˉpan",
            desc: "ˉSatˉyapit ˉstˉhanˉiy ˉnˉirdeshˉank ˉane ˉbahuˉ-padˉoshi ˉpˉushti ˉdˉvˉara ˉnaˉgˉarˉpalika ˉvishˉvas ˉbanˉave ˉche.",
          },
        },
      },

      live_tracking: {
        eyebrow: "લાઇવ ટ્રેકિંગ પૂર્વાવલોકન",
        title: "દરેક રિપોર્ટ. દરેક સ્થિતિ. વાસ્તવિક સમયમાં.",
        description: "રહેવાસીઓ અને અધિકારીઓ એક પારદર્શક ડેશબોર્ડ શેર કરે છે—જેથી કોઈને પણ તેમની રિપોર્ટનું શું થયું તે પૂછવા માટે હેલ્પલાઈન પર કૉલ કરવો ન પડે.",
        sampleLabel: "નમૂના ડેશબોર્ડ પૂર્વાવલોકન",
        labels: {
          engineerStatus: "એન્જિનિયર સ્થિતિ",
          eta: "અંદાજિત સમય",
          verification: "સામુદાયિક ચકાસણી",
          progress: "પ્રગતિ",
        },
        issue: {
          category: "રસ્તા સમારકામ",
          ward: "વોર્ડ ૧૮",
          engineerStatus: "એન્જિનિયર નિયુક્ત — નિરીક્ષણ પૂર્ણ",
          eta: "અંદાજિત ઉકેલ: ૪ દિવસ",
          verification: "૫ માંથી ૩ પડોશીઓએ સ્થળ પર ચકાસણી કરી",
        },
      },
      twin: {
        eyebrow: "સામુદાયિક ડિજિટલ ટ્વીન",
        title: "તમારો પડોશ, માપવામાં આવેલ અને સમજાયેલ",
        description: "AI રિપોર્ટ્સ, રીઝોલ્યુશન અને સમુદાયના પ્રતિસાદને જીવંત આરોગ્ય સ્કોર્સમાં સંશ્લેષણ કરે છે—નેતાઓ અને રહેવાસીઓને નાગરિક સુખાકારીનું સહિયારું ચિત્ર આપે છે.",
        demoLabel: "AI-જનરેટેડ નમૂના સ્કોર્સ",
        scores: {
          infrastructure: {
            label: "ઇન્ફ્રાસ્ટ્રક્ચર",
            trend: "આ મહિને +3",
          },
          safety: {
            label: "સુરક્ષા",
            trend: "આ મહિને +5",
          },
          cleanliness: {
            label: "સ્વચ્છતા",
            trend: "આ મહિને +2",
          },
          water: {
            label: "પાણી",
            trend: "સ્થિર",
          },
          health: {
            label: "સામુદાયિક આરોગ્ય",
            trend: "આ મહિને +4",
          },
        },
      },
      google: {
        eyebrow: "ટેકનોલોજી સ્ટેક",
        title: "AI અને ઓપન સ્ટાન્ડર્ડ દ્વારા સંચાલિત આધુનિક ટેક સ્ટેક",
        description: "કમ્યુનિટી હીરો સલામત, બહુભાષી અને AI-સહાયિત નાગરિક રિપોર્ટિંગ માટે ગૂગલ AI, ફાયરબેઝ ઇન્ફ્રાસ્ટ્રક્ચર અને ઓપન-સોર્સ ટેક્નોલોજીને જોડે છે.",
        technologies: {
          "ai-studio": {
            category: "AI પ્લેટફોર્મ",
            title: "Google AI Studio",
            description: "જેમિની સમગ્ર પ્લેટફોર્મ પર AI-સહાયિત વિઝન વિશ્લેષણ, બહુભાષી સમજ, સ્માર્ટ સારાંશ અને સામુદાયિક સહાય પૂરી પાડે છે."
          },
          firebase: {
            category: "બેકએન્ડ",
            title: "Firebase",
            description: "ફાયરબેઝ ઓથેન્ટિકેશન, ફાયરસ્ટોર ડેટાબેઝ, સુરક્ષિત સ્ટોરેજ અને રિયલ-ટાઇમ સિંક્રનાઇઝેશન એપ્લિકેશન બેકએન્ડને પાવર કરે છે."
          },
          maps: {
            category: "ઇન્ટરેક્ટિવ નકશા",
            title: "OpenStreetMap + Leaflet",
            description: "ઇન્ટરેક્ટિવ ઓપન-સોર્સ નકશા સમસ્યાનું સ્થાન, વોર્ડ સીમાઓ અને જીવંત ભૌગોલિક વિઝ્યુઅલાઈઝેશન પ્રદાન કરે છે."
          },
          speech: {
            category: "બ્રાઉઝર API",
            title: "Web Speech API",
            description: "બ્રાઉઝર-નેટિવ સ્પીચ-ટુ-ટેક્સ્ટ અને ટેક્સ્ટ-ટુ-સ્પીચ અવાજ-આધારિત રિપોર્ટિંગ અને સુલભતા સક્ષમ કરે છે."
          },
          translate: {
            category: "બહુભાષીય",
            title: "AI સંચાલિત બહુભાષી અનુવાદ",
            description: "જેમિની-સંચાલિત બહુભાષી અનુવાદ નાગરિકોને તેમની મનપસંદ ભાષામાં કમ્યુનિટી હીરો સાથે વાતચીત કરવા સક્ષમ બનાવે છે."
          },
          analytics: {
            category: "વિઝ્યુઅલાઈઝેશન",
            title: "સામુદાયિક એનાલિટિક્સ ડેશબોર્ડ",
            description: "ઇન્ટરેક્ટિવ ડેશબોર્ડ સમસ્યાના આંકડા, કેટેગરી વલણો, પ્રતિભાવ સમયરેખા, AI આંતરદૃષ્ટિ અને સામુદಾಯિક આરોગ્ય સૂચકાંકો દર્શાવે છે."
          }
        }
      },
      impact: {
        eyebrow: "સામુદાયિક પ્રભાવ",
        title: "પારદર્શકતાથી આવતો તફાવત",
        description: "જ્યારે નાગરિકો પ્રગતિ જુએ છે, ત્યારે તેઓ વધુ રિપોર્ટ કરે છે, વધુ સ્વયંસેવા કરે છે અને વધુ વિશ્વાસ કરે છે. આ આંકડા દર્શાવે છે કે શું શક્ય બને છે.",
        demoLabel: "પ્રદર્શન માટે નમૂના આંકડા",
        stats: {
          solved: {
            label: "સમસ્યાઓ ઉકેલાઈ",
          },
          citizens: {
            label: "નાગરિકોને મદદ કરી",
          },
          volunteer: {
            label: "સ્વયંસેવક કલાકો",
          },
          resolution: {
            label: "ઉકેલ દર",
          },
        },
      },
      final_cta: {
        title: "પ્રભાવ પાડવા માટે તૈયાર છો?",
        description: "આજે જ વધુ સ્વચ્છ, સુરક્ષિત અને વધુ પ્રતિભાવશીલ સમુદાય બનાવવામાં તમારા પડોશીઓ સાથે જોડાઓ.",
        ctas: {
          primary: "સમસ્યાની રિપોર્ટ કરો",
          secondary: "લાઇવ મેપ જુઓ",
        },
      },
    },
    dashboard: {
      title: "ડેશબોર્ડ",
      subtitle: "તમારો નાગરિક પ્રભાવ",
      description: "તમારી નવીનતમ પ્રસ્તુતિઓની સમીક્ષા કરો, સ્થિતિને ટ્રૅક કરો અને જુઓ કે તમારી રિપોર્ટ્સ સામુદાયિક પ્રક્રિયા દ્વારા કેવી રીતે આગળ વધી રહી છે.",
      stats: {
        totalReports: "કુલ અહેવાલો",
        pending: "વિલંબિત",
        assigned: "સોંપાયેલ",
        inProgress: "પ્રગતિમાં",
        resolved: "ઉકેલાયેલ",
      },
      gamification: {
        levelProgress: "આગલા સ્તર માટે પ્રગતિ",
        pointsRequired: "આગલા સ્તર {{level}} સુધી પહોંચવા માટે {{points}} પોઇન્ટ્સ જોઈએ",
        dailyStreak: "દૈનિક સ્ટ્રીક",
        streakDays: "{{days}} દિવસ",
        streakTip: "તમારી સ્ટ્રીક જાળવી રાખવા માટે રોજ લોગિન કરો!",
        badgesEarned: "મેળવેલા બેજ",
        badgesTip: "પોઇન્ટ્સ મેળવવા માટે સિદ્ધિઓ અનલૉક કરો!",
        cityRank: "શહેર રેન્ક",
        rankTip: "વૈશ્વિક બોર્ડ પર તમારું સ્થાન",
        badgesTitle: "નાગરિક બેજ",
        badgesSubtitle: "સામુદાયિક સ્વચ્છતા અને રિપોર્ટ ટ્રેકિંગમાં ફાળો આપીને બેજ મેળવો.",
        pts: "પોઇન્ટ્સ",
        badge: "બેજ",
        badges: "બેજ",
      },
      leaderboard: {
        title: "શહેર લીડરબોર્ડ",
        subtitle: "ટોચના 10 નાયકો",
        empty: "બોર્ડ પર હજી સુધી કોઈ નાયક નથી.",
        pts: "પોઇન્ટ્સ",
      },
      performance: {
        title: "પ્રદર્શન",
        description: "AI વિશ્લેષણ મેટ્રિક્સ અને પ્રાથમિકતા વિતરણ.",
        verifiedByAi: "AI દ્વારા ચકાસાયેલ",
        verifiedTip: "AI વિશ્લેષણ ધરાવતા રિપોર્ટ્સ",
        highPriority: "ઉચ્ચ પ્રાથમિકતા",
        highPriorityTip: "પ્રાથમિકતા સ્કોર ≥ 80",
        averagePriority: "સરેરાશ પ્રાથમિકતા",
        averagePriorityTip: "AI અહેવાલોનો સરેરાશ સ્કોર",
        averageConfidence: "સરેરાશ AI વિશ્વાસ",
        averageConfidenceTip: "AI પ્રોસેસિંગનો વિશ્વાસ",
      },
      recentReports: {
        title: "તાજેતરના અહેવાલો",
        subtitle: "તમારા દ્વારા સબમિટ કરાયેલી નવીનતમ સમસ્યાઓ.",
        loading: "તમારી રિપોર્ટ લોડ થઈ રહી છે...",
        empty: "હજી સુધી કોઈ રિપોર્ટ મળી નથી. પ્રગતિ ટ્રૅક કરવા માટે તમારી પ્રથમ રિપોર્ટ સબમિટ કરો.",
      },
    },
    reportForm: {
      title: "નાગરિક સમસ્યાની રિપોર્ટ કરો",
      description: "સમસ્યાનો ફોટો અથવા ટૂંકો વીડિયો અપલોડ કરો. અમારો AI પુરાવાઓનું વિશ્લેષણ કરશે અને યોગ્ય વિભાગની ભલામણ કરશે.",
      uploadTitle: "પુરાવા અપલોડ કરો",
      uploadTip: "સમર્થિત ફોર્મેટ્સ: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "વર્ણન",
      descPlaceholder: "નાગરિક સમસ્યાનું વર્ણન કરો... (તમે માઇક્રોફોન બટન પર ક્લિક કરીને પણ બોલી શકો છો)",
      categoryLabel: "શ્રેણી",
      locationStatus: "સ્થાનની સ્થિતિ",
      locationDetail: {
        waiting: "બ્રાઉઝર પરવાનગીની રાહ જોઈ રહ્યા છીએ...",
        denied: "સ્થાન પરવાનગી નકારી કાઢી. તમે હજી પણ સ્થાન વિના સબમિટ કરી શકો છો.",
        detected: "સ્થાન શોધાયું",
        requesting: "સ્થાનની વિનંતી કરી રહ્યા છીએ...",
      },
      locationCard: {
        address: "સરનામું",
        latitude: "અક્ષાંશ",
        longitude: "રેખાંશ",
        city: "શહેર",
        region: "રાજ્ય",
        accuracy: "સચોટતા: {{accuracy}} મીટર",
      },
      buttons: {
        analyze: "AI સાથે વિશ્લેષણ કરો",
        analyzing: "વિશ્લેષણ થઈ રહ્યું છે...",
        complete: "✓ AI વિશ્લેષણ પૂર્ણ",
        submit: "રિપોર્ટ સબમિટ કરો",
        submitting: "સબમિટ થઈ રહ્યું છે...",
        reset: "રીસેટ કરો",
      },
      speech: {
        start: "અવાજ રેકોર્ડિંગ શરૂ કરો",
        stop: "અવાજ રેકોર્ડિંગ બંધ કરો",
        unsupported: "વોઇસ-ટુ-ટેક્સ્ટ તમારા બ્રાઉઝર દ્વારા સમર્થિત નથી.",
      },
    },
    reports: {
      title: "મારી રિપોર્ટ્સ",
      subtitle: "અહેવાલ ઇતિહાસ",
      description: "તમે સબમિટ કરેલી દરેક સમસ્યા બ્રાઉઝ કરો અને સમુદાય સમીક્ષા પ્રક્રિયાના સ્થિતિ અપડેટ્સ જુઓ.",
      loading: "તમારી રિપોર્ટ લોડ થઈ રહી છે...",
      empty: {
        line1: "તમે હજી સુધી કોઈ રિપોર્ટ સબમિટ કરી નથી.",
        line2: "નવી સમસ્યા નોંધાવવા માટે રિપોર્ટ પૃષ્ઠ પર જાઓ.",
      },
    },
    reportDetail: {
      title: "રિપોર્ટ વિગતો",
      subtitle: "લાઇવ ટ્રેકિંગ",
      description: "આ રિપોર્ટ માટે વર્તમાન સ્થિતિ, વિશ્લેષણ, સમયરેખા અને વિભાગ સોંપણીની સમીક્ષા કરો.",
      created: "બનાવવામાં આવ્યું",
      lastUpdated: "છેલ્લે અપડેટ કરેલ",
      location: "સ્થાન",
      noLocation: "સ્થાન ઉપલબ્ધ નથી",
      assignedDept: "સોંપાયેલ વિભાગ",
      notAssigned: "સોંપાયેલ નથી",
      aiAnalysis: {
        title: "AI વિશ્લેષણ",
        category: "શ્રેણી",
        department: "વિભાગ",
        severity: "તીવ્રતા",
        priority: "પ્રાથમિકતા સ્કોર",
        confidence: "AI વિશ્વાસ",
        summary: "સારાંશ",
        empty: "આ રિપોર્ટ માટે કોઈ AI વિશ્લેષણ ઉપલબ્ધ નથી.",
        translating: "સારાંશનો અનુવાદ થઈ રહ્યો છે...",
      },
      speech: {
        read: "સામગ્રી મોટેથી વાંચો",
        stop: "વાંચવાનું બંધ કરો",
      },
      notFound: {
        title: "અહેવાલ મળ્યો નથી",
        description: "તમે જે રિપોર્ટ જોવાનો પ્રયાસ કરી રહ્યા છો તેનું અસ્તિત્વ નથી અથવા તમને તે જોવાની પરવાનગી નથી.",
        back: "રિપોર્ટ પર પાછા જાઓ",
      },
    },
    tracking: {
      progress: {
        title: "અહેવાલ પ્રગતિ",
        description: "તમારા અહેવાલના વર્તમાન તબક્કાને ટ્રૅક કરો.",
      },
      timeline: {
        title: "ટ્રૅકિંગ સમયરેખા",
        description: "તાજેતરના અપડેટ્સ સમય ક્રમ અનુસાર દર્શાવ્યા છે.",
      },
      status: {
        submitted: "નાગરિક દ્વારા ફરિયાદ નોંધાઈ.",
        assigned: "ફરિયાદ સંબંધિત વિભાગને સોંપવામાં આવી.",
        inspectionStarted: "તપાસ પૂર્ણ થઈ અને કાર્ય શરૂ થયું.",
        inProgress: "કાર્ય ચાલુ છે",
        verified: "AI ચકાસણી પૂર્ણ થઈ",
        resolved: "ફરિયાદનું નિવારણ કરવામાં આવ્યું છે",
        closed: "ફરિયાદ બંધ કરવામાં આવી",
        Pending: "વિલંબિત",
        Verified: "ચકાસાયેલ",
        Assigned: "સોંપાયેલ",
        "In Progress": "પ્રગતિમાં",
        Resolved: "ઉકેલાયેલ",
        "Issue submitted": "સમસ્યા નોંધવામાં આવી",
        "AI verification completed": "એઆઈ ચકાસણી પૂર્ણ થઈ",
        "Assigned to department": "વિભાગને સોંપવામાં આવી",
        "Work started": "કામ શરૂ થયું",
        "Issue resolved": "સમસ્યા ઉકેલાઈ",
      },
    },
    liveMap: {
      title: "લાઇવ સામુદાયિક નકશો",
      subtitle: "વાસ્તવિક સમયનું રિપોર્ટિંગ",
      description: "વાસ્તવિક સમયમાં સમગ્ર સમુદાયમાં ચાલતી નાગરિક સમસ્યાઓ જુઓ અને ટ્રૅક કરો.",
      statistics: "આંકડા",
      legend: "દંતકથા",
      filters: {
        category: "બધી શ્રેણીઓ",
        status: "બધી સ્થિતિઓ",
        all: "બધું",
      },
      popup: {
        department: "સોંપાયેલ વિભાગ",
        priority: "પ્રાથમિકતા સ્કોર",
        severity: "તીવ્રતા",
        confidence: "AI વિશ્વાસ",
        address: "સરનામું",
        time: "રિપોર્ટ કરાયેલ સમય",
        button: "લાઇવ ટ્રેકિંગ જુઓ →",
      },
      empty: {
        title: "કોઈ નાગરિક અહેવાલો ઉપલબ્ધ નથી.",
        description: "પસંદ કરેલા ફિલ્ટર્સ સાથે કોઈ સક્રિય રિપોર્ટ્સ મેળ ખાતા નથી અથવા તેમાં ભૌગોલિક સ્થાન વિગતો નથી. પછીથી ફરી તપાસો અથવા નવી રિપોર્ટ સબમિટ કરો.",
      },
      connecting: "ફાયરબેઝ સાથે કનેક્ટ થઈ રહ્યું છે...",
      loading: "ઇન્ટરેક્ટિવ નકશો લોડ થઈ રહ્યો છે...",
    },
    badges: {
      first_report: {
        name: "પ્રથમ રિપોર્ટ",
        description: "તમારો પ્રથમ નાગરિક રિપોર્ટ સબમિટ કર્યો.",
      },
      five_reports: {
        name: "5 રિપોર્ટ્સ",
        description: "પાંચ નાગરિક રિપોર્ટ્સ સબમિટ કર્યા.",
      },
      ten_reports: {
        name: "10 રિપોર્ટ્સ",
        description: "દસ નાગરિક રિપોર્ટ્સ સબમિટ કર્યા.",
      },
      points_100: {
        name: "100 હીરો પોઇન્ટ્સ",
        description: "100 હીરો પોઇન્ટ્સ સુધી પહોંચ્યા.",
      },
      points_500: {
        name: "500 હીરો પોઇન્ટ્સ",
        description: "500 હીરો પોઇન્ટ્સ સુધી પહોંચ્યા.",
      },
      streak_7: {
        name: "7 દિવસની સ્ટ્રીક",
        description: "7 દિવસની સક્રિય સ્ટ્રીક જાળવી રાખી.",
      },
      clean_city_hero: {
        name: "સ્વચ્છ શહેર નાયક",
        description: "શહેરને સ્વચ્છ રાખવામાં મદદ કરવા રિપોર્ટ સબમિટ કર્યો.",
      },
      traffic_guardian: {
        name: "ટ્રાફિક ગાર્ડિયન",
        description: "ટ્રાફિક સિગ્નલ અથવા સુરક્ષા સમસ્યાઓની રિપોર્ટ કરી.",
      },
      environment_protector: {
        name: "પર્યાવરણ રક્ષક",
        description: "પાણીના લીકેજ અથવા ગટરની સમસ્યાઓની રિપોર્ટ કરી.",
      },
      community_starter: {
        name: "કોમ્યુનિટી સ્ટાર્ટર",
      },
      civic_volunteer: {
        name: "ನಾಗರೀಕ ಸ್ವಯಂಸೇವಕ",
      },
      community_guardian: {
        name: "કોમ્યુનિટી ગાર્ડિયન",
      },
      city_hero: {
        name: "સિટી હીરો",
      },
      civic_champion: {
        name: "નાગરિક ચેમ્પિયન",
      },
      community_legend: {
        name: "કોમ્યુનિટી લેજન્ડ",
      },
    },
    toasts: {
      badgeUnlocked: "બેજ અનલૉક થયો",
      pointsAwarded: "+{{points}} હીરો પોઇન્ટ્સ",
    },
    categories: {
      Roads: "રસ્તાઓ",
      Garbage: "કચરો",
      Water: "પાણી",
      Traffic: "ટ્રાફિક",
      "Street Lights": "સ્ટ્રીટ લાઇટ્સ",
      Safety: "સુરક્ષા",
      Other: "અન્ય",
    },
    departments: {
      "Public Works Department": "લોકનિર્માણ વિભાગ",
      "Municipal Corporation": "મહાનગરપાલિકા",
      "Water Department": "જળ વિભાગ",
      "Traffic Police": "ટ્રાફિક પોલીસ",
      "Electricity Department": "વીજળી વિભાગ",
      "Public Safety": "જાહેર સુરક્ષા",
      "Environment Department": "પર્યાવરણ વિભાગ",
      "Awaiting Assignment": "સોંપણીની પ્રતીક્ષા છે",
    },
    severity: {
      Low: "ઓછું",
      Medium: "મધ્યમ",
      High: "ઉચ્ચ",
      Critical: "गंभीर",
      Pending: "વિલંબિત",
    },
    admin: {
      title: "Municipal Authority Panel",
      subtitle: "Manage reports, assign departments, and track resolution metrics.",
      menu: {
        dashboard: "Dashboard",
        reports: "Reports",
        users: "Users",
        analytics: "Analytics",
      },
      dashboard: {
        total: "Total Reports",
        pending: "Pending",
        verified: "Verified",
        assigned: "Assigned",
        inProgress: "In Progress",
        resolved: "Resolved",
        highPriority: "High Priority",
        today: "Today's Reports",
        recentTitle: "Recent Activity",
        viewAll: "View All Reports",
        quickActions: "Quick Links",
        manageReports: "Manage Reports",
        manageUsers: "Manage Users",
        viewAnalytics: "View Analytics",
      },
      reports: {
        search: "Search reports...",
        allStatuses: "All Statuses",
        allCategories: "All Categories",
        allDepartments: "All Departments",
        allPriorities: "All Priorities",
        newest: "Newest First",
        oldest: "Oldest First",
        showing: "Showing",
        of: "of",
        results: "results",
        empty: "No reports found",
        emptyHint: "Try adjusting your filters or search terms.",
      },
    },
  },
};

const mr = {
  translation: {
    auth: {
      badge: "कम्युनिटी हिरो • सुरक्षित कार्यक्षेत्र",
      title: "कम्युनिटी हिरोमध्ये सुरक्षित प्रवेश",
      description: "नागरी समस्यांची तक्रार करण्यासाठी, तक्रारीच्या प्रगतीचा मागोवा घेण्यासाठी, आपल्या समुदायासोबत सहकार्य करण्यासाठी आणि आपल्या वैयक्तिक डॅशबोर्डमध्ये प्रवेश करण्यासाठी आपल्या Google खात्याचा वापर करून सुरक्षितपणे साइन इन करा.",
      signInButton: "गूगल द्वारे साइन इन करा",
      signingIn: "साइन इन होत आहे...",
      backToHome: "होमवर परत जा",
      indicators: {
        secure: "सुरक्षित लॉगिन",
        tracking: "रिअल-टाइम ट्रॅकिंग",
        ai: "AI सहाय्यित वर्कफ्लो"
      }
    },
    privacy: {
      eyebrow: "प्रकल्प धोरण",
      title: "गोपनीयता धोरण",
      description: "कम्युनिटी हिरो वापरत असलेल्या माहितीचा आणि सद्य प्रदर्शन ती कशी हाताळते याचा सोप्या भाषेतील आढावा.",
      updated: "२८ जून २०२६",
      sections: {
        data_collection: {
          title: "डेटा संकलन",
          description: "कम्युनिटी हिरो नागरी रिपोर्टिंग प्रदर्शन चालवण्यासाठी आवश्यक माहिती गोळा करते. यामध्ये तुमचे Google खाते नाव, ईमेल पत्ता, रिपोर्ट वर्णन, श्रेणी, रिपोर्टची स्थिती आणि तांत्रिक टाइमस्टॅम्प समाविष्ट असू शकतात."
        },
        authentication: {
          title: "प्रमाणीकरण",
          description: "Google साइन-इन Firebase प्रमाणीकरण द्वारे हाताळले जाते. कम्युनिटी हिरो रिपोर्ट्स तुमच्या खात्याशी जोडण्यासाठी तुमच्या प्रमाणित युझर आयडीचा वापर करते. पासवर्ड गोळा किंवा साठवले जात नाहीत."
        },
        firebase: {
          title: "Firebase चा वापर",
          description: "फायरस्टोअर खाते-संबंधित प्रोफाइल माहिती, सबमिट केलेले रिपोर्ट तपशील, AI विश्लेषण परिणाम, प्रदान केलेले स्थान तपशील आणि रिपोर्ट स्थिती इतिहास साठवते."
        },
        location: {
          title: "स्थान परवानग्या",
          description: "जेव्हा तुम्ही रिपोर्टिंग वैशिष्ट्ये वापरता तेव्हा तुमच्या ब्राउझरद्वारे स्थान प्रवेशाची विनंती केली जाते. मंजूर केल्यास, स्थान माहिती रिपोर्टमध्ये समाविष्ट केली जाऊ शकते."
        },
        media: {
          title: "प्रतिमा आणि व्हिडिओ निवड",
          description: "निवडलेल्या मीडियाचा वापर AI-सहाय्यित विश्लेषणासाठी केला जातो. चालू रिपोर्ट केवळ मीडिया प्रकार आणि विश्लेषण माहिती साठवतो; मूळ फाईल साठवली जात नाही."
        },
        voice: {
          title: "आवाज संवाद",
          description: "स्पीच-टू-टेक्स्ट आणि टेक्स्ट-टू-स्पीच ब्राउझरच्या वेब स्पीच क्षमतेचा वापर करतात. कम्युनिटी हिरो व्हॉइस रेकॉर्डिंग साठवत नाही."
        },
        cookies: {
          title: "कुकीज आणि स्थानिक स्टोरेज",
          description: "Firebase प्रमाणीकरण लॉगिन सत्र राखण्यासाठी ब्राउझर स्टोरेज वापरू शकते. या प्रकल्पात कोणत्याही जाहिरात कुकीज समाविष्ट नाहीत."
        },
        contact: {
          title: "संपर्क",
          description: "गोपनीयता प्रश्नांसाठी, संपर्क पृष्ठ वापरा. सार्वजनिक प्रकल्प ईमेल सध्या एक डेमो प्लेसहोल्डर आहे."
        }
      }
    },
    terms: {
      eyebrow: "प्रकल्प अटी",
      title: "सेवा अटी",
      description: "कम्युनिटी हिरो आणि त्याच्या AI-सहाय्यित वर्कफ्लोच्या जबाबदार वापरासाठी व्यावहारिक अटी.",
      updated: "२८ जून २०२६",
      sections: {
        acceptable_use: {
          title: "स्वीकारार्ह वापर",
          description: "कम्युनिटी हिरोचा वापर केवळ कायदेशीर नागरी रिपोर्टिंगसाठी करा. त्रास देणारी, बेकायदेशीर किंवा हेतुपुरस्सर खोटी माहिती सबमिट करू नका."
        },
        user_resp: {
          title: "वापरकर्त्याच्या जबाबदाऱ्या",
          description: "तुम्ही सबमिट केलेल्या माहितीच्या अचूकतेसाठी तुम्ही स्वतः जबाबदार आहात. नको असलेली वैयक्तिक माहिती टाळा."
        },
        ownership: {
          title: "सामग्रीची मालकी",
          description: "तुम्ही तयार केलेल्या सामग्रीची मालकी तुमच्याकडेच राहते. रिपोर्ट सबमिट करून, तुम्ही प्रकल्पाला त्याचे विश्लेषण करण्याची परवानगी देता."
        },
        disclaimer: {
          title: "AI सहाय्य अस्वीकरण",
          description: "AI माहिती अपूर्ण किंवा चुकीची असू शकते. कोणताही गंभीर निर्णय घेण्यापूर्वी लोकांनी त्याची तपासणी करणे आवश्यक आहे."
        },
        notice: {
          title: "महानगरपालिका प्रदर्शन नोटीस",
          description: "कम्युनिटी हिरो हा केवळ एक सोल्यूशन चॅलेंज प्रकल्प आहे. येथे रिपोर्ट सबमिट केल्याने कोणतीही अधिकृत सरकारी यंत्रणा बदलत नाही.",
          item1: "तातडीच्या प्रसंगी कम्युनिटी हिरोचा वापर करू नका.",
          item2: "तातडीच्या मदतीसाठी स्थानिक आपत्कालीन सेवांचा वापर करा.",
          item3: "प्रदर्शित केलेले आकडे आणि आरोग्य निर्देशक केवळ उदाहरणासाठी आहेत."
        },
        liability: {
          title: "जबाबदारीची मर्यादा",
          description: "हा प्रकल्प कोणत्याही हमीशिवाय मूल्यमापनासाठी प्रदान केला गेला आहे."
        }
      }
    },
    contact: {
      eyebrow: "प्रकल्प संपर्क",
      title: "चला अधिक प्रतिसाद देणारे समुदाय तयार करूया",
      description: "नागरिक आणि स्थानिक अधिकारी पारदर्शक पद्धतीने कसे सहकार्य करू शकतात यावर कम्युनिटी हिरो प्रकाश टाकते.",
      challenge: {
        title: "Google Solution Challenge",
        desc: "कम्युनिटी हिरो दाखवते की जबाबदार AI मुळे पारदर्शकता, सुलभता आणि सहकार्य कसे सुधारू शकते."
      },
      developer: {
        title: "प्रकल्प निर्माता",
        name: "श्रेष्ठा स्वामी",
        degree: "बी.टेक कॉम्प्युटर सायन्स आणि इंजिनिअरिंग (डेटा सायन्स)",
        institution: "SKIT जयपूर",
        focus: "AI • डेटा सायन्स • नागरी तंत्रज्ञान"
      },
      links: {
        title: "निर्मात्याशी संपर्क साधा",
        github: "GitHub प्रोफाइल",
        linkedin: "LinkedIn प्रोफाइल",
        note: "सहकार्य, संशोधन संधी आणि नागरी तंत्रज्ञान चर्चेसाठी उत्सुक."
      },
      form: {
        successTitle: "संदेश तयार झाला",
        successMessage: "हा फॉर्म फक्त डेमो आहे. तो डेटा पाठवत नाही.",
        backText: "फॉर्मवर परत जा",
        name: "नाव",
        email: "ईमेल",
        subject: "विषय",
        message: "संदेश",
        placeholderName: "जॉन डो",
        placeholderEmail: "john@example.com",
        placeholderSubject: "आम्ही कशी मदत करू शकतो?",
        placeholderMessage: "आम्हाला अधिक तपशील सांगा...",
        demoText: "केवळ UI प्रदर्शन—हा फॉर्म संदेश साठवत नाही.",
        submitButton: "संदेश तयार करा"
      },
      faq: {
        eyebrow: "त्वरित उत्तरे",
        title: "सतत विचारले जाणारे प्रश्न",
        q1: "कम्युनिटी हिरो ही अधिकृत सरकारी सेवा आहे का?",
        a1: "नाही. कम्युनिटी हिरो हा सध्या केवळ एक Google सोल्यूशन चॅलेंज प्रोजेक्ट आहे."
      }
    },

    common: {
      loading: "लोड होत आहे...",
      error: "त्रुटी",
      reset: "रीसेट करा",
      submit: "जमा करा",
      cancel: "रद्द करा",
      back: "मागे जा",
      retry: "पुन्हा प्रयत्न करा",
      progress: "प्रगती",
      chooseFile: "फाइल निवडा",
      camera: "कॅमेरा",
      dragDrop: "येथे प्रतिमा किंवा व्हिडिओ ड्रॅग आणि ड्रॉप करा",
      viewLiveTracking: "लाइव्ह ट्रॅकिंग पहा",
      play: "सुरू करा",
      pause: "थांबवा",
      resume: "पुन्हा सुरू करा",
      stop: "बंद करा",
      preview: "पूर्वावलोकन",
      remove: "काढून टाका",
    },
    navbar: {
      home: "होम",
      report: "तक्रार नोंदवा",
      map: "लाइव्ह मॅप",
      dashboard: "डॅशबोर्ड",
      myReports: "माझ्या तक्रारी",
      login: "गूगलसह साइन इन करा",
      logout: "लॉगआउट",
      adminPanel: "अ‍ॅडमिन पॅनेल",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      about: {
        title: "कम्युनिटी हिरोबद्दल",
        desc: "कम्युनिटी हिरो एक AI-सहाय्यित नागरिक रिपोर्टिंग प्लॅटफॉर्म आहे जे नागरिक आणि स्थानिक अधिकारी यांना पारदर्शक समस्या रिपोर्टिंग, बहुभाषिक प्रवेश आणि रिअल-टाइम प्रगती ट्रॅकिंगद्वारे सहकार्य करण्यास सक्षम करते.",
      },
      tech: {
        title: "तंत्रज्ञान स्टॅक",
        items: {
          nextjs: "Next.js 16",
          react: "React + TypeScript",
          firebase: "Firebase + Firestore",
          ai: "Google AI Studio",
          maps: "OpenStreetMap + Leaflet",
          tailwind: "Tailwind CSS",
        },
      },
      quick_links: { title: "त्वरित दुवे" },
      recognition: {
        title: "मान्यता",
        badge: "Google Solution Challenge 2026",
        desc: "जबाबदार AI, बहुभाषिक प्रवेश आणि पारदर्शक नागरिक वर्कफ्लो समुदाय आणि नगरपालिका यांच्यातील सहकार्य कसे मजबूत करू शकतात हे दाखवण्यासाठी डिझाइन केलेले.",
      },
      challenge_tag: "Google Solution Challenge साठी ❤️ ने बनवले",
      privacy: "गोपनीयता",
      terms: "अटी",
      contact: "संपर्क",
      copyright: "© {{year}} कम्युनिटी हिरो. सर्व हक्क राखीव.",
    },
    landing: {
      hero: {
        eyebrow: "AI-चालित नागरी गुप्तहेर मंच",
        tagline: "एक तक्रार. सहा AI एजंट. एक मजबूत समुदाय.",
        headline: {
          before: "जेव्हा शेजारी एकत्र बोलतात, ",
          highlight: "तेव्हा समुदाय बदलतात.",
        },
        description: "कम्युनिटी हिरो एकाच फोटो आणि व्हॉइस नोटला सत्यापित, प्राधान्यीकृत, ट्रॅक करण्यायोग्य नागरी कृतीमध्ये रूपांतरित करतो—जेणेकरून प्रत्येक तक्रार योग्य प्राधिकरणापर्यंत पोहोचेल आणि प्रत्येक रहिवासी जागरूक राहील.",
        ctas: {
          primary: "तक्रार नोंदवा",
          secondary: "लाइव्ह मॅप पहा",
        },
        trust_badges: {
          "ai-powered": "AI चालित",
          "real-time": "रियल-टाइम ट्रॅकिंग",
          "multilingual": "बहुभाषिक समर्थन",
        },
      },
      problem: {
        eyebrow: "नागरी समस्या",
        title: "तक्रार नोंदवणे लोकांना जोडणारे असावे—कागदपत्रात बुडवणारे नाही",
        description: "बहुतांश शहरे अजूनही फॉर्म, phone ट्री आणि आशेवर चालतात. नागरिक एकदा तक्रार करतात, नंतर काहीच ऐकत नाहीत. विश्वास कमी होतो. समस्या वाढत जातात. कम्युनिटी हिरो हे अंतर भरून काढण्यासाठी आहे.",
        cards: {
          "black-hole": {
            title: "तक्रारी एका ब्लॅक होलमध्ये नाहीशा होतात",
            description: "नागरिक समस्या जमा करतात आणि कधीही कोणतेही अपडेट मिळवत नाहीत. पारदर्शकतेशिवाय, लोक तक्रार करणे थांबवतात—आणि समस्या अनिर्बंध वाढतात.",
          },
          "no-accountability": {
            title: "परिणामाची जबाबदारी कोणीही घेत नाही",
            description: "विभाग एकमेकांकडे तिकिटे वर्ग करतात. रहिवाशांना हे दिसत नाही की कोण जबाबदार आहे किंवा काम कधी सुरू होईल.",
          },
          "language-barrier": {
            title: "भाषा लोकांना बाहेर ठेवते",
            description: "अधिकृत पोर्टल्स इंग्रजीचे ज्ञान आणि डिजिटल साक्षरता गृहीत धरतात, ज्यामुळे ज्या समुदायांना मदतीची सर्वात जास्त गरज असते तेच वंचित राहतात.",
          },
          "slow-response": {
            title: "तातडी अदृश्य आहे",
            description: "स्प्रेडशीटमध्ये रस्त्यावरील खड्डा आणि गॅस गळती सारखीच दिसते. बुद्धिमान वर्गीकरणाशिवाय, महत्त्वाच्या समस्या रांगेत वाट पाहतात.",
          },
        },
      },
      solution: {
        eyebrow: "रिपोर्ट वर्कफ्लो",
        title: "रिपोर्टपासून निराकरणापर्यंत",
        description: "कम्युनिटी हिरो प्रत्येक रिपोर्टला AI-सहाय्यित नागरिक वर्कफ्लोद्वारे मार्गदर्शन करतो जे रहिवासी, स्थानिक अधिकारी आणि समुदायांना पारदर्शक समस्या निराकरणाकडे सहकार्य करण्यात मदत करतो.",
        flow: {
          citizen: {
            label: "नागरिक",
            detail: "फोटो घेतो, व्हॉइस नोट रेकॉर्ड करतो, किंवा मॅप पिन टॅप करतो",
          },
          agents: {
            label: "एआय एजंट",
            detail: "सहा विशेष एजंट रिपोर्टचे विश्लेषण, सत्यापन आणि रूटिंग करतात",
          },
          authorities: {
            label: "प्राधिकरणे",
            detail: "वार्ड अभियंते आणि विभागांना प्राधान्य कामाचे आदेश मिळतात",
          },
          community: {
            label: "समुदाय",
            detail: "शेजारी प्रगती ट्रॅक करतात आणि एकत्र सुधारणा सत्यापित करतात",
          },
          resolution: {
            label: "निराकरण",
            detail: "समस्या पुराव्यासह बंद होतात—आणि विश्वास ब्लॉक-दर-ब्लॉक पुन्हा निर्माण होतो",
          },
        },
      },
      agents: {
        eyebrow: "एआय एजंट पाइपलाइन",
        title: "सहा एजंट. एक समन्वित कार्यप्रवाह.",
        description: "नागरिकांच्या इनपुटचे संरचित नागरी माहितीमध्ये रूपांतर करण्यात प्रत्येक क्षमतेची भूमिका केंद्रित असते, ज्यामध्ये मानवी-वाचनीय स्पष्टीकरणे आणि बुद्धिमान सहाय्य असते.",
        badges: { future_enhancement: "भविष्यातील वैशिष्ट्य" },
        list: {
          vision: { title: "व्हिजन एजंट", responsibility: "नागरिक अहवालांमधील फोटो आणि दृश्य पुराव्यांचे विश्लेषण करतो." },
          geo: { title: "जिओ एजंट", responsibility: "समस्यांचे अचूक प्रभाग सीमा आणि महत्त्वाच्या ठिकाणांवर नकाशे तयार करतो." },
          trust: { title: "व्हॅलिडेशन एजंट", responsibility: "अहवालाच्या पूर्णतेची पडताळणी करतो आणि सबमिट करण्यापूर्वी संभाव्य डुप्लिकेट ओळखण्यात मदत करतो." },
          priority: { title: "प्रायोरिटी एजंट", responsibility: "जलद प्रतिसादासाठी तातडी आणि समुदाय प्रभावाला क्रमवारी देतो." },
          prediction: { title: "भविष्यातील अंदाज", responsibility: "ऐतिहासिक म्युनिसिपल पॅटर्न वापरून समस्या वाढण्याच्या प्रवृत्तींचे मूल्यमापन करण्यासाठी डिझाइन केलेले." },
          copilot: { title: "नागरिक सहाय्यक", responsibility: "बहुभाषिक सहाय्याद्वारे नागरिकांना मार्गदर्शन करतो, निर्णयांचे स्पष्टीकरण देतो आणि समस्या ट्रॅकिंगला समर्थन देतो." },
        },
      },
      credibility: {
        title: "पारदर्शक नागरिक सहकार्यासाठी निर्मित",
        description: "कम्युनिटी हिरो दाखवते की AI-सहाय्यित वर्कफ्लो, बहुभाषिक प्रवेश आणि पारदर्शक रिपोर्टिंग नागरिक आणि स्थानिक अधिकारी यांच्यातील सहकार्य कसे बळकट करू शकते.",
        cards: {
          ai: {
            title: "AI-सहाय्यित रिपोर्टिंग",
            desc: "दृष्टी, स्थान आणि भाषण विश्लेषणाने रिपोर्ट त्वरित वर्गीकृत, सारांशित आणि प्राधान्यक्रमित करतो.",
          },
          tracking: {
            title: "पारदर्शक ट्रॅकिंग",
            desc: "संरचित प्रगती कालरेषांद्वारे रहिवासी आणि अधिकाऱ्यांना वास्तविक वेळेत अपडेट ठेवतो.",
          },
          i18n: {
            title: "बहुभाषिक प्रवेशयोग्यता",
            desc: "एकात्मिक Speech-to-Text इनपुटसह इंटरफेसचे 8 प्रादेशिक भाषांमध्ये भाषांतर करतो.",
          },
          verification: {
            title: "सामुदायिक सत्यापन",
            desc: "सत्यापित स्थानिक निर्देशांक आणि बहु-शेजारी पुष्टीद्वारे नगरपालिका विश्वास निर्माण करतो.",
          },
        },
      },

      live_tracking: {
        eyebrow: "लाइव्ह ट्रॅकिंग पूर्वदृश्य",
        title: "प्रत्येक तक्रार. प्रत्येक स्थिती. वास्तविक वेळेत.",
        description: "रहिवासी आणि अधिकारी एक पारदर्शक डॅशबोर्ड सामायिक करतात—जेणेकरून कोणालाही त्यांच्या तक्रारीचे काय झाले हे विचारण्यासाठी हेल्पलाईनवर कॉल करावा लागणार नाही.",
        sampleLabel: "नमुना डॅशबोर्ड पूर्वदृश्य",
        labels: {
          engineerStatus: "अभियंता स्थिती",
          eta: "अंदाजित वेळ",
          verification: "सामुदायिक पडताळणी",
          progress: "प्रगती",
        },
        issue: {
          category: "रस्ता दुरुस्ती",
          ward: "वॉर्ड १८",
          engineerStatus: "अभियंता नियुक्त — तपासणी पूर्ण",
          eta: "अंदाजित निवारण: ४ दिवस",
          verification: "५ पैकी ३ शेजाऱ्यांनी घटनास्थळी पडताळणी केली",
        },
      },
      twin: {
        eyebrow: "सामुदायिक डिजिटल ट्विन",
        title: "तुमचा परिसर, मोजलेला आणि समजलेला",
        description: "AI तक्रारी, निवारण आणि समुदाय अभिप्रायाला सक्रिय आरोग्य स्कोअरमध्ये एकत्रित करतो—नेते आणि रहिवाशांना नागरी कल्याणाचे एक सामायिक चित्र देतो.",
        demoLabel: "AI-व्युत्पन्न नमुना गुण",
        scores: {
          infrastructure: {
            label: "पायाभूत सुविधा",
            trend: "या महिन्यात +3",
          },
          safety: {
            label: "सुरक्षा",
            trend: "या महिन्यात +5",
          },
          cleanliness: {
            label: "स्वच्छता",
            trend: "या महिन्यात +2",
          },
          water: {
            label: "पाणी",
            trend: "स्थिर",
          },
          health: {
            label: "सामुदायिक आरोग्य",
            trend: "या महिन्यात +4",
          },
        },
      },
      google: {
        eyebrow: "तंत्रज्ञान स्टॅक",
        title: "AI आणि खुल्या मानकांद्वारे समर्थित आधुनिक तंत्रज्ञान स्टॅक",
        description: "कम्युनिटी हिरो सुरक्षित, बहुभाषिक आणि AI-सहाय्यित नागरी अहवालासाठी Google AI, Firebase पायाभूत सुविधा आणि मुक्त-स्रोत तंत्रज्ञान एकत्र करते.",
        technologies: {
          "ai-studio": {
            category: "AI प्लॅटफॉर्म",
            title: "Google AI Studio",
            description: "जेमिनी संपूर्ण प्लॅटफॉर्मवर AI-सहाय्यित व्हिजन विश्लेषण, बहुभाषिक समज, स्मार्ट सारांश आणि समुदाय सहाय्य प्रदान करते."
          },
          firebase: {
            category: "बॅकएंड",
            title: "Firebase",
            description: "Firebase ऑथेंटिकेशन, Firestore डेटाबेस, सुरक्षित स्टोरेज आणि रिअल-टाइम सिंक्रोनाइझेशन संपूर्ण ॲप्लिकेशन बॅकएंडला सक्षम करते."
          },
          maps: {
            category: "परस्परसंवादी नकाशे",
            title: "OpenStreetMap + Leaflet",
            description: "परस्परसंवादी मुक्त-स्रोत नकाशे समस्यांचे स्थान, प्रभागाच्या सीमा आणि थेट भौगोलिक व्हिज्युअलायझेशन प्रदान करतात."
          },
          speech: {
            category: "ब्राउझर API",
            title: "Web Speech API",
            description: "ब्राउझर-नेटिव्ह स्पीच-टू-टेक्स्ट आणि टेक्स्ट-टू-स्पीच आवाज-आधारित अहवाल आणि प्रवेशयोग्यता सक्षम करते."
          },
          translate: {
            category: "बहुभाषिक",
            title: "AI समर्थित बहुभाषिक भाषांतर",
            description: "जेमिनी-चालित बहुभाषिक भाषांतर नागरिकांना त्यांच्या आवडीच्या भाषेत कम्युनिटी हिरोशी संवाद साधण्यास सक्षम करते."
          },
          analytics: {
            category: "व्हिज्युअलायझेशन",
            title: "सामुदायिक विश्लेषण डॅशबोर्ड",
            description: "परस्परसंवादी डॅशबोर्ड समस्येची आकडेवारी, श्रेणीचे ट्रेंड, प्रतिसाद टाइमलाइन, AI अंतर्दृष्टी आणि समुदाय आरोग्य निर्देशक दर्शवतात."
          }
        }
      },
      impact: {
        eyebrow: "सामुदायिक प्रभाव",
        title: "पारदर्शकतेमुळे पडणारा फरक",
        description: "जब नागरिक प्रगती पाहतात, तेव्हा ते अधिक तक्रारी नोंदवतात, अधिक स्वयंसेवा करतात आणि अधिक विश्वास ठेवतात. हे आकडे काय शक्य होते ते दर्शवतात.",
        demoLabel: "दर्शवण्यासाठी नमुना आकडेवारी",
        stats: {
          solved: {
            label: "तक्रारी सोडवल्या",
          },
          citizens: {
            label: "नागरिकांना मदत केली",
          },
          volunteer: {
            label: "स्वयंसेवक तास",
          },
          resolution: {
            label: "निवारण दर",
          },
        },
      },
      final_cta: {
        title: "प्रभाव पाडण्यासाठी तयार आहात का?",
        description: "आजच अधिक स्वच्छ, सुरक्षित आणि अधिक प्रतिसाद देणारा समुदाय तयार करण्यात आपल्या शेजाऱ्यांसोबत सामील व्हा.",
        ctas: {
          primary: "तक्रार नोंदवा",
          secondary: "लाइव्ह मॅप पहा",
        },
      },
    },
    dashboard: {
      title: "डॅशबोर्ड",
      subtitle: "तुमचा नागरी प्रभाव",
      description: "तुमच्या नवीनतम तक्रारींचे पुनरावलोकन करा, प्रगतीचा मागोवा घ्या आणि तुमची तक्रार नागरी प्रक्रियेतून कशी पुढे जात आहे ते पहा.",
      stats: {
        totalReports: "एकूण तक्रारी",
        pending: "प्रलंबित",
        assigned: "नियुक्त",
        inProgress: "प्रगतीत",
        resolved: "निराकरण झाले",
      },
      gamification: {
        levelProgress: "पुढील स्तरासाठी प्रगती",
        pointsRequired: "पुढील स्तर {{level}} गाठण्यासाठी {{points}} गुण आवश्यक",
        dailyStreak: "दैनिक स्ट्रीक",
        streakDays: "{{days}} दिवस",
        streakTip: "तुमची स्ट्रीक कायम ठेवण्यासाठी दररोज लॉग इन करा!",
        badgesEarned: "मिळवलेले बॅज",
        badgesTip: "गुण मिळवण्यासाठी यश अनलॉक करा!",
        cityRank: "शहर रँक",
        rankTip: "वैश्विक बोर्डवर तुमचे स्थान",
        badgesTitle: "नागरी बॅज",
        badgesSubtitle: "सामुदायिक स्वच्छता आणि तक्रार ट्रॅकिंगमध्ये योगदान देऊन बॅज मिळवा.",
        pts: "गुण",
        badge: "बॅज",
        badges: "बॅज",
      },
      leaderboard: {
        title: "शहर लीडरबोर्ड",
        subtitle: "अव्वल १० नायक",
        empty: "बोर्डवर अजून कोणताही नायक नाही.",
        pts: "गुण",
      },
      performance: {
        title: "कामगिरी",
        description: "AI विश्लेषण मेट्रिक्स आणि प्राधान्य वितरण.",
        verifiedByAi: "AI द्वारे सत्यापित",
        verifiedTip: "AI विश्लेषण असलेल्या तक्रारी",
        highPriority: "उच्च प्राधान्य",
        highPriorityTip: "प्राधान्य स्कोअर ≥ 80",
        averagePriority: "सरेराश प्राधान्य",
        averagePriorityTip: "AI तक्रारींचा सरासरी स्कोअर",
        averageConfidence: "सरासरी AI विश्वास",
        averageConfidenceTip: "AI प्रक्रियेचा विश्वास",
      },
      recentReports: {
        title: "अलीकडील तक्रारी",
        subtitle: "तुमच्याद्वारे सबमिट केलेल्या नवीनतम समस्या.",
        loading: "तुमची तक्रार लोड होत आहे...",
        empty: "अद्याप कोणतीही तक्रार आढळली नाही. प्रगतीचा मागोवा घेण्यासाठी पहिली तक्रार सबमिट करा.",
      },
    },
    reportForm: {
      title: "नागरी समस्या नोंदवा",
      description: "समस्येचा फोटो किंवा लहान व्हिडिओ अपलोड करा. आमचे AI पुराव्यांचे विश्लेषण करेल आणि योग्य विभागाची शिफारस करेल.",
      uploadTitle: "पुरावा अपलोड करा",
      uploadTip: "समर्थित स्वरूप: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "वर्णन",
      descPlaceholder: "नागरी समस्येचे वर्णन करा... (तुम्ही मायक्रोफोन बटणावर क्लिक करून देखील बोलू शकता)",
      categoryLabel: "श्रेणी",
      locationStatus: "स्थानाची स्थिती",
      locationDetail: {
        waiting: "ब्राउझर परवानगीची वाट पाहत आहे...",
        denied: "स्थान परवानगी नाकारली. तुम्ही अद्याप स्थानाशिवाय सबमिट करू शकता.",
        detected: "स्थान आढळले",
        requesting: "स्थानाची विनंती करत आहे...",
      },
      locationCard: {
        address: "पत्ता",
        latitude: "अक्षांश",
        longitude: "रेखांश",
        city: "शहर",
        region: "राज्य",
        accuracy: "अचूकता: {{accuracy}} मीटर",
      },
      buttons: {
        analyze: "AI सह विश्लेषण करा",
        analyzing: "विश्लेषण होत आहे...",
        complete: "✓ AI विश्लेषण पूर्ण",
        submit: "तक्रार सबमिट करा",
        submitting: "सबमिट होत आहे...",
        reset: "रीसेट करा",
      },
      speech: {
        start: "आवाज रेकॉर्डिंग सुरू करा",
        stop: "आवाज रेकॉर्डिंग बंद करा",
        unsupported: "व्हॉइस-टू-टेक्स्ट तुमच्या ब्राउझरद्वारे समर्थित नाही.",
      },
    },
    reports: {
      title: "माझ्या तक्रारी",
      subtitle: "तक्रार इतिहास",
      description: "तुम्ही सबमिट केलेली प्रत्येक समस्या ब्राउझ करा आणि समुदाय पुनरावलोकन प्रक्रियेतील प्रगती पहा.",
      loading: "तुमची तक्रार लोड होत आहे...",
      empty: {
        line1: "तुम्ही अद्याप कोणतीही तक्रार सबमिट केलेली नाही.",
        line2: "नवीन समस्या नोंदवण्यासाठी तक्रार पृष्ठावर जा.",
      },
    },
    reportDetail: {
      title: "तक्रारीचा तपशील",
      subtitle: "लाइव्ह ट्रॅकिंग",
      description: "या तक्रारीसाठी सद्य स्थिती, विश्लेषण, समयरेखा आणि विभाग नियुक्तीचे पुनरावलोकन करा.",
      created: "तयार केले",
      lastUpdated: "अंतिम अद्यतन",
      location: "स्थान",
      noLocation: "स्थान उपलब्ध नाही",
      assignedDept: "नियुक्त विभाग",
      notAssigned: "नियुक्त नाही",
      aiAnalysis: {
        title: "AI विश्लेषण",
        category: "श्रेणी",
        department: "विभाग",
        severity: "तीव्रता",
        priority: "प्राधान्य स्कोअर",
        confidence: "AI विश्वास",
        summary: "सारांश",
        empty: "या तक्रारीसाठी कोणतेही AI विश्लेषण उपलब्ध नाही.",
        translating: "सारांश भाषांतरित होत आहे...",
      },
      speech: {
        read: "मजकूर मोठ्याने वाचा",
        stop: "वाचन थांबवा",
      },
      notFound: {
        title: "तक्रार आढळली नाही",
        description: "तुम्ही जी तक्रार पाहण्याचा प्रयत्न करत आहात ती अस्तित्वात नाही किंवा ती पाहण्याची तुम्हाला परवानगी नाही.",
        back: "तक्रारींवर परत जा",
      },
    },
    tracking: {
      progress: {
        title: "तक्रार प्रगती",
        description: "तुमच्या तक्रारीचा सद्य टप्पा ट्रॅक करा.",
      },
      timeline: {
        title: "ट्रॅकिंग टाइमलाइन",
        description: "अलीकडील अपडेट कालक्रमानुसार दाखवले आहेत.",
      },
      status: {
        submitted: "नागरिकाद्वारे तक्रार नोंदवली गेली.",
        assigned: "तक्रार संबंधित विभागाकडे सोपवण्यात आली.",
        inspectionStarted: "तपासणी पूर्ण झाली आणि प्रत्यक्ष काम सुरू झाले.",
        inProgress: "काम प्रगतीपथावर आहे",
        verified: "AI पडताळणी पूर्ण झाली",
        resolved: "समस्या सोडवली गेली आहे",
        closed: "तक्रार बंद करण्यात आली",
        Pending: "प्रलंबित",
        Verified: "सत्यापित",
        Assigned: "नियुक्त",
        "In Progress": "प्रगतीत",
        Resolved: "निराकरण झाले",
        "Issue submitted": "तक्रार नोंदवली",
        "AI verification completed": "एआय पडताळणी पूर्ण झाली",
        "Assigned to department": "विभागाकडे वर्ग केले",
        "Work started": "काम सुरू झाले",
        "Issue resolved": "तक्रार सुटली",
      },
    },
    liveMap: {
      title: "लाइव्ह नागरी नकाशा",
      subtitle: "रिअल-टाइम रिपोर्टिंग",
      description: "वास्तविक वेळेत संपूर्ण परिसरातील चालू नागरी समस्या पहा आणि ट्रॅक करा.",
      statistics: "आकडेवारी",
      legend: "दंतकथा",
      filters: {
        category: "सर्व श्रेणी",
        status: "सर्व स्थिती",
        all: "सर्व",
      },
      popup: {
        department: "नियुक्त विभाग",
        priority: "प्राधान्य स्कोअर",
        severity: "तीव्रता",
        confidence: "AI विश्वास",
        address: "पत्ता",
        time: "नोंदवलेली वेळ",
        button: "लाइव्ह ट्रॅकिंग पहा →",
      },
      empty: {
        title: "कोणत्याही नागरी तक्रारी उपलब्ध नाहीत.",
        description: "चयनित फिल्टरशी कोणतीही सक्रिय तक्रार जुळत नाही किंवा त्यात भौगोलिक स्थान तपशील नाही. नंतर पुन्हा तपासा किंवा नवीन तक्रार सबमिट करा.",
      },
      connecting: "फायरबेसशी कनेक्ट करत आहे...",
      loading: "परस्परसंवादी नकाशा लोड होत आहे...",
    },
    badges: {
      first_report: {
        name: "पहिली तक्रार",
        description: "तुमची पहिली नागरी तक्रार सबमिट केली.",
      },
      five_reports: {
        name: "५ तक्रारी",
        description: "पाच नागरी तक्रारी सबमिट केल्या.",
      },
      ten_reports: {
        name: "१० तक्रारी",
        description: "दहा नागरी तक्रारी सबमिट केल्या.",
      },
      points_100: {
        name: "१०० हिरो गुण",
        description: "१०० हिरो गुणांपर्यंत पोहोचले.",
      },
      points_500: {
        name: "५०० हिरो गुण",
        description: "५०० हिरो गुणांपर्यंत पोहोचले.",
      },
      streak_7: {
        name: "७ दिवसांची स्ट्रीक",
        description: "७ दिवसांची सक्रिय स्ट्रीक राखली.",
      },
      clean_city_hero: {
        name: "स्वच्छ शहर नायक",
        description: "शहर स्वच्छ ठेवण्यास मदत करण्यासाठी तक्रार सबमिट केली.",
      },
      traffic_guardian: {
        name: "वाहतूक रक्षक",
        description: "वाहतूक संकेत किंवा सुरक्षा समस्यांची तक्रार केली.",
      },
      environment_protector: {
        name: "पर्यावरण रक्षक",
        description: "पाणी गळती किंवा सांडपाण्याच्या समस्यांची तक्रार केली.",
      },
      community_starter: {
        name: "कम्युनिटी स्टार्टर",
      },
      civic_volunteer: {
        name: "नागरी स्वयंसेवक",
      },
      community_guardian: {
        name: "कम्युनिटी गार्डियन",
      },
      city_hero: {
        name: "सिटी हिरो",
      },
      civic_champion: {
        name: "नागरी चॅम्पियन",
      },
      community_legend: {
        name: "कम्युनिटी लेजंड",
      },
    },
    toasts: {
      badgeUnlocked: "बॅज अनलॉक झाला",
      pointsAwarded: "+{{points}} हिरो गुण",
    },
    categories: {
      Roads: "रस्ते",
      Garbage: "कचरा",
      Water: "पाणी",
      Traffic: "वाहतूक",
      "Street Lights": "स्ट्रीट लाईट्स",
      Safety: "सुरक्षा",
      Other: "इतर",
    },
    departments: {
      "Public Works Department": "सार्वजनिक बांधकाम विभाग",
      "Municipal Corporation": "महानगरपालिका",
      "Water Department": "पाणी विभाग",
      "Traffic Police": "वाहतूक पोलीस",
      "Electricity Department": "विद्युत विभाग",
      "Public Safety": "सार्वजनिक सुरक्षा",
      "Environment Department": "पर्यावरण विभाग",
      "Awaiting Assignment": "नियुक्तीची प्रतीक्षा आहे",
    },
    severity: {
      Low: "कमी",
      Medium: "मध्यम",
      High: "उच्च",
      Critical: "गंभीर",
      Pending: "प्रलंबित",
    },
    admin: {
      title: "Municipal Authority Panel",
      subtitle: "Manage reports, assign departments, and track resolution metrics.",
      menu: {
        dashboard: "Dashboard",
        reports: "Reports",
        users: "Users",
        analytics: "Analytics",
      },
      dashboard: {
        total: "Total Reports",
        pending: "Pending",
        verified: "Verified",
        assigned: "Assigned",
        inProgress: "In Progress",
        resolved: "Resolved",
        highPriority: "High Priority",
        today: "Today's Reports",
        recentTitle: "Recent Activity",
        viewAll: "View All Reports",
        quickActions: "Quick Links",
        manageReports: "Manage Reports",
        manageUsers: "Manage Users",
        viewAnalytics: "View Analytics",
      },
      reports: {
        search: "Search reports...",
        allStatuses: "All Statuses",
        allCategories: "All Categories",
        allDepartments: "All Departments",
        allPriorities: "All Priorities",
        newest: "Newest First",
        oldest: "Oldest First",
        showing: "Showing",
        of: "of",
        results: "results",
        empty: "No reports found",
        emptyHint: "Try adjusting your filters or search terms.",
      },
    },
  },
};

const bn = {
  translation: {
    auth: {
      badge: "কমিউনিটি হিরো • সুরক্ষিত কর্মক্ষেত্র",
      title: "কমিউনিটি হিরো-তে সুরক্ষিত অ্যাক্সেস",
      description: "নাগরিক সমস্যা রিপোর্ট করতে, রিপোর্টের অগ্রগতি ট্র্যাক করতে, আপনার সম্প্রদায়ের সাথে সহযোগিতা করতে এবং আপনার ব্যক্তিগত ড্যাশবোর্ড অ্যাক্সেস করতে আপনার Google অ্যাকাউন্ট ব্যবহার করে নিরাপদে সাইন ইন করুন।",
      signInButton: "গুগল দিয়ে সাইন ইন করুন",
      signingIn: "সাইন ইন হচ্ছে...",
      backToHome: "হোমে ফিরে যান",
      indicators: {
        secure: "সুরक्षित লগইন",
        tracking: "রিয়েল-টাইม ট্র্যাকিং",
        ai: "AI সহায়তাপ্রাপ্ত ওয়ার্কফ্লো"
      }
    },
    privacy: {
      eyebrow: "প্রকল্প নীতি",
      title: "গোপনীয়তা নীতি",
      description: "কমিউনিটি হিরো যে তথ্য ব্যবহার করে এবং বর্তমান প্রদর্শন কীভাবে তা পরিচালনা করে তার একটি সহজ বিবরণ।",
      updated: "২৮ জুন ২০২৬",
      sections: {
        data_collection: {
          title: "তথ্য সংগ্রহ",
          description: "কমিউনিটি হিরো নাগরিক রিপোর্টিং পরিচালনার জন্য প্রয়োজনীয় তথ্য সংগ্রহ করে। এর মধ্যে আপনার Google অ্যাকাউন্ট নাম, ইমেল ঠিকানা, রিপোর্টের বিবরণ, বিভাগ, রিপোর্টের অবস্থা এবং প্রযুক্তিগত টাইমস্ট্যাম্প অন্তর্ভুক্ত থাকতে পারে।"
        },
        authentication: {
          title: "প্রমাণীকরণ",
          description: "Google সাইন-ইন Firebase প্রমাণীকরণের মাধ্যমে পরিচালিত হয়। অ্যাপ্লিকেশন দ্বারা পাসওয়ার্ড সংগ্রহ বা সংরক্ষণ করা হয় না।"
        },
        firebase: {
          title: "Firebase ব্যবহার",
          description: "ফায়ারস্টোর অ্যাকাউন্ট সংক্রান্ত প্রোফাইল তথ্য, সাবমিট করা রিপোর্টের বিবরণ, AI বিশ্লেষণ ফলাফল, অবস্থান তথ্য এবং রিপোর্টের ইতিহাস সংরক্ষণ করে।"
        },
        location: {
          title: "অবস্থানের অনুমতি",
          description: "রিপোর্টিং বৈশিষ্ট্যগুলি ব্যবহারের সময় ব্রাউজারের মাধ্যমে অবস্থানের অ্যাক্সেসের অনুরোধ করা হয়। আপনি ব্রাউজার সেটিংসে এটি পরিবর্তন করতে পারেন।"
        },
        media: {
          title: "ছবি ও ভিডিও নির্বাচন",
          description: "নির্বাচিত মিডিয়া AI-সহায়তা বিশ্লেষণের জন্য ব্যবহৃত হয়। এটি ফায়ারস্টোরে মূল মিডিয়া ফাইল সংরক্ষণ করে না।"
        },
        voice: {
          title: "ভয়েস ইন্টারঅ্যাকশন",
          description: "স্পিচ-টু-টেক্সট এবং টেক্সট-টু-স্পিচ ব্রাউজারের ওয়েব স্পিচ ক্ষমতা ব্যবহার করে। ভয়েস রেকর্ডিং সংরক্ষণ করা হয় না।"
        },
        cookies: {
          title: "কুকিজ এবং লোকাল স্টোরেজ",
          description: "Firebase সাইন-ইন সেশন বজায় রাখতে ব্রাউজার স্টোরেজ ব্যবহার করতে পারে। এই প্রকল্পে কোন বিজ্ঞাপন কুকি ব্যবহার করা হয় না।"
        },
        contact: {
          title: "যোগাযোগ",
          description: "গোপনীয়তা সংক্রান্ত প্রশ্নের জন্য যোগাযোগ পৃষ্ঠা ব্যবহার করুন। পাবলিক প্রজেক্ট ইমেলটি বর্তমানে একটি প্লেসহোল্ডার।"
        }
      }
    },
    terms: {
      eyebrow: "প্রকল্পের শর্তাবলী",
      title: "শর্তাবলী",
      description: "কমিউনিটি হিরো এবং এর AI-সহায়তা রিপোর্টিং ওয়ার্কফ্লোর দায়িত্বশীল ব্যবহারের জন্য ব্যবহারিক শর্তাবলী।",
      updated: "২৮ জুন ২০২৬",
      sections: {
        acceptable_use: {
          title: "গ্রহণযোগ্য ব্যবহার",
          description: "কমিউনিটি হিরো কেবল বৈধ নাগরিক রিপোর্টিংয়ের জন্য ব্যবহার করুন। কোনো হয়রানিমূলক বা বেআইনি তথ্য জমা দেবেন না।"
        },
        user_resp: {
          title: "ব্যবহারকারীর দায়িত্ব",
          description: "জমা দেওয়া তথ্যের নির্ভুলতার জন্য আপনি দায়ী। অপ্রয়োজনীয় ব্যক্তিগত তথ্য দেওয়া এড়িয়ে চলুন।"
        },
        ownership: {
          title: "বিষয়বস্তুর মালিকানা",
          description: "আপনার তৈরি বিষয়বস্তুর মালিকানা আপনারই থাকবে। রিপোর্ট জমা দেওয়ার মাধ্যমে আপনি প্রকল্পটিকে এটি ব্যবহারের অনুমতি দিচ্ছেন।"
        },
        disclaimer: {
          title: "AI সহায়তা দাবিত্যাগ",
          description: "AI ফলাফল অপূর্ণ বা ভুল হতে পারে। যেকোনো সিদ্ধান্ত নেওয়ার আগে মানুষের দ্বারা তা যাচাই করা উচিত।"
        },
        notice: {
          title: "পৌরসভা প্রদর্শন নোটিশ",
          description: "কমিউনিটি হিরো একটি সোলিউশন চ্যালেঞ্জ প্রকল্প। এটি কোনো অফিসিয়াল সরকারি রিপোর্ট প্রতিস্থাপন করে না।",
          item1: "জরুরী পরিস্থিতিতে এটি ব্যবহার করবেন না।",
          item2: "জরুরী প্রয়োজনে স্থানীয় জরুরী সেবা ব্যবহার করুন।",
          item3: "প্রদর্শিত পরিসংখ্যান এবং স্বাস্থ্য সূচকগুলি কেবল উদাহরণের জন্য।"
        },
        liability: {
          title: "দায়বদ্ধতার সীমাবদ্ধতা",
          description: "এই প্রকল্পটি কোনো ওয়ারেন্টি ছাড়াই মূল্যায়নের জন্য প্রদান করা হয়েছে।"
        }
      }
    },
    contact: {
      eyebrow: "যোগাযোগ",
      title: "আসুন আরও সক্রিয় সম্প্রদায় গড়ে তুলি",
      description: "নাগরিক এবং স্থানীয় কর্তৃপক্ষ কীভাবে স্বচ্ছতার সাথে সহযোগিতা করতে পারে তা নিয়ে কাজ করে কমিউনিটি হিরো।",
      challenge: {
        title: "Google Solution Challenge",
        desc: "কমিউনিটি হিরো দেখায় যে দায়িত্বশীল AI কীভাবে নাগরিকদের এবং কর্তৃপক্ষের মধ্যে সহযোগিতা বাড়াতে পারে।"
      },
      developer: {
        title: "প্রকল্প ডেভেলপার",
        name: "শ্রেষ্ঠা স্বামী",
        degree: "বি.টেক কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (ডেটা সায়েন্স)",
        institution: "SKIT জয়পুর",
        focus: "AI • ডেটা সায়েন্স • নাগরিক প্রযুক্তি"
      },
      links: {
        title: "ডেভেলপারের সাথে যোগাযোগ করুন",
        github: "GitHub প্রোফাইল",
        linkedin: "LinkedIn প্রোফাইল",
        note: "সহযোগিতা ও নাগরিক প্রযুক্তি সংক্রান্ত আলোচনার জন্য আমন্ত্রণ।"
      },
      form: {
        successTitle: "বার্তা প্রস্তুত করা হয়েছে",
        successMessage: "এই ফর্মটি একটি প্রদর্শন মাত্র। এটি কোন তথ্য ব্যাকএন্ডে পাঠায় না।",
        backText: "ফর্মে ফিরে যান",
        name: "নাম",
        email: "ইমেল",
        subject: "বিষয়",
        message: "বার্তা",
        placeholderName: "জন ডো",
        placeholderEmail: "john@example.com",
        placeholderSubject: "আমরা কীভাবে সাহায্য করতে পারি?",
        placeholderMessage: "আমাদের আরও বিস্তারিত বলুন...",
        demoText: "কেবল UI প্রদর্শন—এই ফর্মটি কোনো তথ্য সংরক্ষণ করে না।",
        submitButton: "বার্তা প্রস্তুত করুন"
      },
      faq: {
        eyebrow: "দ্রুত উত্তর",
        title: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
        q1: "কমিউনিটি হিরো কি কোনো অফিসিয়াল সরকারী সেবা?",
        a1: "না। কমিউনিটি হিরো বর্তমানে একটি গুগল সলিউশন চ্যালেঞ্জ প্রকল্প।"
      }
    },

    common: {
      loading: "লোড হচ্ছে...",
      error: "ত্রুটি",
      reset: "রিসেট করুন",
      submit: "জমা দিন",
      cancel: "বাতিল করুন",
      back: "ফিরে যান",
      retry: "আবার চেষ্টা করুন",
      progress: "অগ্রগতি",
      chooseFile: "ফাইল বেছে নিন",
      camera: "ক্যামেরা",
      dragDrop: "এখানে একটি ছবি বা ভিডিও টেনে আনুন",
      viewLiveTracking: "লাইভ ট্র্যাকিং দেখুন",
      play: "চালান",
      pause: "বিরতি দিন",
      resume: "আবার শুরু করুন",
      stop: "থামান",
      preview: "পূর্বরূপ",
      remove: "সরান",
    },
    navbar: {
      home: "হোম",
      report: "অভিযোগ করুন",
      map: "লাইভ ম্যাপ",
      dashboard: "ড্যাশবোর্ড",
      myReports: "আমার অভিযোগ সমূহ",
      login: "গুগল দিয়ে সাইন ইন করুন",
      logout: "লগআউট",
      adminPanel: "অ্যাডমিন প্যানেল",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      about: {
        title: "কমিউনিটি হিরো সম্পর্কে",
        desc: "কমিউনিটি হিরো একটি AI-সহায়তা নাগরিক রিপোর্টিং প্ল্যাটফর্ম যা নাগরিকদের এবং স্থানীয় কর্তৃপক্ষকে স্বচ্ছ সমস্যা রিপোর্টিং, বহুভাষিক অ্যাক্সেসিবিলিটি এবং রিয়েল-টাইম প্রগতি ট্র্যাকিংয়ের মাধ্যমে সহযোগিতা করতে সক্ষম করে।",
      },
      tech: {
        title: "প্রযুক্তি স্ট্যাক",
        items: {
          nextjs: "Next.js 16",
          react: "React + TypeScript",
          firebase: "Firebase + Firestore",
          ai: "Google AI Studio",
          maps: "OpenStreetMap + Leaflet",
          tailwind: "Tailwind CSS",
        },
      },
      quick_links: { title: "দ্রুত লিঙ্ক" },
      recognition: {
        title: "স্বীকৃতি",
        badge: "Google Solution Challenge 2026",
        desc: "দায়িত্বশীল AI, বহুভাষিক অ্যাক্সেসিবিলিটি এবং স্বচ্ছ নাগরিক ওয়ার্কফ্লো কীভাবে সম্প্রদায় ও পৌরসভার মধ্যে সহযোগিতা মজবুত করতে পারে তা প্রদর্শনের জন্য ডিজাইন করা হয়েছে।",
      },
      challenge_tag: "Google Solution Challenge-এর জন্য ❤️ দিয়ে তৈরি",
      privacy: "গোপনীয়তা",
      terms: "শর্তাবলী",
      contact: "যোগাযোগ",
      copyright: "© {{year}} কমিউনিটি হিরো। সর্বস্বত্ব সংরক্ষিত।",
    },
    landing: {
      hero: {
        eyebrow: "AI-চালিত নাগরিক বুদ্ধিমত্তা প্ল্যাটফর্ম",
        tagline: "একটি রিপোর্ট। ছয়টি AI এজেন্ট। একটি শক্তিশালী সম্প্রদায়।",
        headline: {
          before: "যখন প্রতিবেশীরা সোচ্চার হয়, ",
          highlight: "তখন সম্প্রদায় বদলে যায়।",
        },
        description: "কমিউনিটি হিরো একটিমাত্র ছবি এবং ভয়েস নোটকে একটি যাচাইকৃত, অগ্রাধিকারপ্রাপ্ত এবং ট্র্যাকযোগ্য নাগরিক পদক্ষেপে রূপান্তর করে—যাতে প্রতিটি রিপোর্ট সঠিক কর্তৃপক্ষের কাছে পৌঁছায় এবং প্রতিটি বাসিন্দা অবহিত থাকে।",
        ctas: {
          primary: "অভিযোগ জানান",
          secondary: "লাইভ ম্যাপ দেখুন",
        },
        trust_badges: {
          "ai-powered": "AI চালিত",
          "real-time": "রিয়েল-টাইম ট্র্যাকিং",
          "multilingual": "বহুভাষিক সহায়তা",
        },
      },
      problem: {
        eyebrow: "নাগরিক সমস্যা",
        title: "রিপোর্টিং মানুষকে সংযুক্ত করার জন্য হওয়া উচিত—কাগজপত্রের নিচে কবর দেওয়ার জন্য নয়",
        description: "অধিকাংশ শহর এখনও ফর্ম, ফোন কল এবং আশার ওপর চলে। নাগরিকরা একবার রিপোর্ট করে, তারপর আর কিছুই শুনতে পায় না। বিশ্বাস নষ্ট হয়। সমস্যা বাড়তে থাকে। কমিউনিটি হিরো এই দূরত্ব দূর করার জন্য তৈরি হয়েছে।",
        cards: {
          "black-hole": {
            title: "রিপোর্টগুলো ব্ল্যাক হোলে হারিয়ে যায়",
            description: "নাগরিকরা সমস্যা জমা দেয় কিন্তু কোনো আপডেট পায় না। স্বচ্ছতা না থাকায় মানুষ রিপোর্ট করা বন্ধ করে দেয়—এবং সমস্যাগুলো ক্রমাগত বাড়তে থাকে।",
          },
          "no-accountability": {
            title: "ফলাফলের দায়িত্ব কেউ নেয় না",
            description: "বিভাগগুলো টিকিটগুলো একে অপরের কাছে স্থানান্তর করে। বাসিন্দারা দেখতে পান না কে দায়ী বা কাজ কখন শুরু হবে।",
          },
          "language-barrier": {
            title: "ভাষা মানুষকে বাইরে রাখে",
            description: "অফিসিয়াল পোর্টালগুলো ইংরেজি দক্ষতা এবং ডিজিটাল সাক্ষরতা ধরে নেয়, যার ফলে সাহায্য প্রয়োজন এমন সম্প্রদায়গুলোই বাদ পড়ে যায়।",
          },
          "slow-response": {
            title: "জরুরি অবস্থা অদৃশ্য থাকে",
            description: "স্প্রেডশীটে একটি গর্ত এবং গ্যাস লিক একই রকম দেখায়। বুদ্ধিমান বাছাই না থাকলে, জরুরি সমস্যাগুলো লাইনে অপেক্ষা করতে থাকে।",
          },
        },
      },
      solution: {
        eyebrow: "রিপোর্ট ওয়ার্কফ্লো",
        title: "রিপোর্ট থেকে সমাধান পর্যন্ত",
        description: "কমিউনিটি হিরো প্রতিটি রিপোর্টকে একটি AI-সহায়তা নাগরিক ওয়ার্কফ্লোর মাধ্যমে পরিচালিত করে যা বাসিন্দা, স্থানীয় কর্তৃপক্ষ এবং সম্প্রদায়গুলিকে স্বচ্ছ সমস্যা সমাধানের দিকে সহযোগিতা করতে সাহায্য করে।",
        flow: {
          citizen: {
            label: "নাগরিক",
            detail: "একটি ছবি তোলে, ভয়েস নোট রেকর্ড করে, বা মানচিত্র পিন ট্যাপ করে",
          },
          agents: {
            label: "AI এজেন্ট",
            detail: "ছয়টি বিশেষ এজেন্ট রিপোর্ট বিশ্লেষণ, যাচাই এবং রাউটিং করে",
          },
          authorities: {
            label: "কর্তৃপক্ষ",
            detail: "ওয়ার্ড ইঞ্জিনিয়ার এবং বিভাগগুলি অগ্রাধিকার কাজের আদেশ পায়",
          },
          community: {
            label: "সম্প্রদায়",
            detail: "প্রতিবেশীরা অগ্রগতি ট্র্যাক করে এবং একসাথে সংশোধন যাচাই করে",
          },
          resolution: {
            label: "সমাধান",
            detail: "সমস্যাগুলি প্রমাণ সহ বন্ধ হয়—এবং বিশ্বাস ব্লক বাই ব্লক পুনর্নির্মিত হয়",
          },
        },
      },
      agents: {
        eyebrow: "এআই এজেন্ট পাইপলাইন",
        title: "ছয়টি এজেন্ট। একটি সমন্বিত কর্মপ্রবাহ।",
        description: "নাগরিক ইনপুটকে কাঠামোগত নাগরিক তথ্যে রূপান্তর করার ক্ষেত্রে প্রতিটি ক্ষমতার একটি নির্দিষ্ট ভূমিকা রয়েছে, যার মধ্যে মানব-পাঠযোগ্য ব্যাখ্যা এবং বুদ্ধিমান সহায়তা রয়েছে।",
        badges: { future_enhancement: "ভবিষ্যৎ উন্নতি" },
        list: {
          vision: { title: "ভিশন এজেন্ট", responsibility: "নাগরিক প্রতিবেদন থেকে ফটো এবং ভিজ্যুয়াল প্রমাণ বিশ্লেষণ করে।" },
          geo: { title: "জিও এজেন্ট", responsibility: "নির্দিষ্ট ওয়ার্ড সীমানা এবং ল্যান্ডমার্কে সমস্যাগুলি মানচিত্রভুক্ত করে।" },
          trust: { title: "ভ্যালিডেশন এজেন্ট", responsibility: "প্রতিবেদনের সম্পূর্ণতা যাচাই করে এবং জমা দেওয়ার আগে সম্ভাব্য ডুপ্লিকেট সনাক্ত করতে সহায়তা করে।" },
          priority: { title: "প্রায়োরিটি এজেন্ট", responsibility: "দ্রুত প্রতিক্রিয়ার জন্য জরুরিতা এবং সম্প্রদায়ের প্রভাবকে ক্রমানুসারে সাজায়।" },
          prediction: { title: "ভবিষ্যৎ পূর্বাভাস", responsibility: "ঐতিহাসিক পৌর প্যাটার্ন ব্যবহার করে সমস্যা বৃদ্ধির প্রবণতা মূল্যায়ন করার জন্য ডিজাইন করা হয়েছে।" },
          copilot: { title: "সিটিজেন অ্যাসিস্ট্যান্ট", responsibility: "বহুভাষিক সহায়তার মাধ্যমে নাগরিকদের গাইড করে, সিদ্ধান্ত ব্যাখ্যা করে এবং সমস্যা ট্র্যাকিং সমর্থন করে।" },
        },
      },
      credibility: {
        title: "স্বচ্ছ নাগরিক সহযোগিতার জন্য নির্মিত",
        description: "কমিউনিটি হিরো প্রদর্শন করে যে AI-সহায়তা ওয়ার্কফ্লো, বহুভাষিক অ্যাক্সেসিবিলিটি এবং স্বচ্ছ রিপোর্টিং কীভাবে নাগরিক ও স্থানীয় কর্তৃপক্ষের মধ্যে সহযোগিতা মজবুত করতে পারে।",
        cards: {
          ai: {
            title: "AI-সহায়তা রিপোর্টিং",
            desc: "দৃষ্টি, অবস্থান এবং বক্তৃতা বিশ্লেষণ দিয়ে রিপোর্ট তাৎক্ষণিকভাবে শ্রেণীবদ্ধ, সারসংক্ষেপ এবং অগ্রাধিকার দেয়।",
          },
          tracking: {
            title: "স্বচ্ছ ট্র্যাকিং",
            desc: "কাঠামোগত অগ্রগতি টাইমলাইনের মাধ্যমে বাসিন্দা ও কর্মকর্তাদের বাস্তব সময়ে আপডেট রাখে।",
          },
          i18n: {
            title: "বহুভাষিক অ্যাক্সেসিবিলিটি",
            desc: "সমন্বিত Speech-to-Text ইনপুট সহ ইন্টারফেস 8টি আঞ্চলিক ভাষায় অনুবাদ করে।",
          },
          verification: {
            title: "কমিউনিটি যাচাইকরণ",
            desc: "যাচাইকৃত স্থানীয় স্থানাঙ্ক এবং বহু-প্রতিবেশী নিশ্চিতকরণের মাধ্যমে পৌর বিশ্বাস গড়ে তোলে।",
          },
        },
      },

      live_tracking: {
        eyebrow: "লাইভ ট্র্যাকিং পূর্বরূপ",
        title: "প্রতিটি রিপোর্ট। প্রতিটি স্ট্যাটাস। রিয়েল টাইমে।",
        description: "বাসিন্দা এবং কর্মকর্তারা একটি স্বচ্ছ ড্যাশবোর্ড ভাগ করে নেন—যাতে কাউকে অভিযোগের কী হলো তা জানতে হেল্পলাইনে কল করতে না হয়।",
        sampleLabel: "নমুনা ড্যাশবোর্ড পূর্বরূপ",
        labels: {
          engineerStatus: "ইঞ্জিনিয়ার স্ট্যাটাস",
          eta: "আনুমানিক সময়",
          verification: "সামাজিক যাচাইকরণ",
          progress: "অগ্রগতি",
        },
        issue: {
          category: "রাস্তা মেরামত",
          ward: "ওয়ার্ড ১৮",
          engineerStatus: "ইঞ্জিনিয়ার নিযুক্ত — পরিদর্শন সম্পন্ন",
          eta: "Estimated resolution: 4 days",
          verification: "৫ জনের মধ্যে ৩ জন প্রতিবেশী ঘটনাস্থলে যাচাই করেছেন",
        },
      },
      twin: {
        eyebrow: "কমিউনিটি ডিজিটাল টুইন",
        title: "আপনার প্রতিবেশী এলাকা, পরিমাপকৃত এবং অনুধাবিত",
        description: "AI রিপোর্ট, সমাধান এবং সামাজিক প্রতিক্রিয়াকে সচল স্বাস্থ্য স্কোরে রূপান্তরিত করে—নেতা ও বাসিন্দাদের নাগরিক কল্যাণের একটি যৌথ চিত্র প্রদান করে।",
        demoLabel: "AI-উৎপন্ন নমুনা স্কোর",
        scores: {
          infrastructure: {
            label: "অবকাঠামো",
            trend: "এই মাসে +৩",
          },
          safety: {
            label: "নিরাপত্তা",
            trend: "এই মাসে +৫",
          },
          cleanliness: {
            label: "পরিচ্ছন্নতা",
            trend: "এই মাসে +২",
          },
          water: {
            label: "জল সরবরাহ",
            trend: "স্থিতিশীল",
          },
          health: {
            label: "সামাজিক স্বাস্থ্য",
            trend: "এই মাসে +৪",
          },
        },
      },
      google: {
        eyebrow: "প্রযুক্তি স্ট্যাক",
        title: "AI এবং উন্মুক্ত মান দ্বারা চালিত আধুনিক প্রযুক্তি স্ট্যাক",
        description: "কমিউনিটি হিরো নিরাপদ, বহুভাষিক, AI-সহায়তা নাগরিক রিপোর্টিং প্রদানের জন্য Google AI, Firebase অবকাঠামো এবং উন্মুক্ত-উৎস প্রযুক্তিকে একত্রিত করে।",
        technologies: {
          "ai-studio": {
            category: "AI প্ল্যাটফর্ম",
            title: "Google AI Studio",
            description: "জেমিনি পুরো প্ল্যাটফর্ম জুড়ে AI-সহায়তা ভিশন বিশ্লেষণ, বহুভাষিক বোধগম্যতা, স্মার্ট সংক্ষিপ্তকরণ এবং সম্প্রদায় সহায়তা প্রদান করে।"
          },
          firebase: {
            category: "ব্যাকএন্ড",
            title: "Firebase",
            description: "Firebase প্রমাণীকরণ, Firestore ডেটাবেস, নিরাপদ স্টোরেজ এবং রিয়েল-টাইম সিঙ্ক্রোনাইজেশন সম্পূর্ণ অ্যাপ্লিকেশন ব্যাকএন্ডকে চালিত করে।"
          },
          maps: {
            category: "ইন্টারেক্টিভ মানচিত্র",
            title: "OpenStreetMap + Leaflet",
            description: "ইন্টারেক্টিভ ওপেন-সোর্স মানচিত্র সমস্যাগুলির অবস্থান, ওয়ার্ড সীমানা এবং লাইভ ভৌগোলিক ভিজ্যুয়ালাইজেশন প্রদান করে।"
          },
          speech: {
            category: "ব্রাউজার API",
            title: "Web Speech API",
            description: "ব্রাউজার-নেটিভ স্পিচ-টু-টেক্সট এবং টেক্সট-টু-স্পিচ ভয়েস-ভিত্তিক রিপোর্ট এবং অ্যাক্সেসিবিলিটি সক্ষম করে।"
          },
          translate: {
            category: "বহুভাষিক",
            title: "AI চালিত বহুভাষিক অনুবাদ",
            description: "জেমিনি-চালিত বহুভাষিক অনুবাদ নাগরিকদের তাদের পছন্দের ভাষায় কমিউনিটি হিরোর সাথে যোগাযোগ করতে সক্ষম করে।"
          },
          analytics: {
            category: "ভিজ্যুয়ালাইজেশন",
            title: "কমিউনিটি অ্যানালিটিক্স ড্যাশবোর্ড",
            description: "ইন্টারেক্টিভ ড্যাশবোর্ডগুলি সমস্যার পরিসংখ্যান, বিভাগের প্রবণতা, প্রতিক্রিয়ার সময়সীমা, AI অন্তর্দৃষ্টি এবং সম্প্রদায়ের স্বাস্থ্য সূচকগুলি প্রদর্শন করে।"
          }
        }
      },
      impact: {
        eyebrow: "সামাজিক প্রভাব",
        title: "স্বচ্ছতা যে পরিবর্তন আনে",
        description: "যখন নাগরিকরা অগ্রগতি দেখে, তখন তারা আরও বেশি রিপোর্ট করে, আরও বেশি স্বেচ্ছাসেবা দেয় এবং আরও বেশি বিশ্বাস করে। এই সংখ্যাগুলো দেখায় কী সম্ভব হতে পারে।",
        demoLabel: "প্রদর্শনের জন্য নমুনা পরিসংখ্যান",
        stats: {
          solved: {
            label: "সমস্যা সমাধান হয়েছে",
          },
          citizens: {
            label: "নাগরিকদের সাহায্য করা হয়েছে",
          },
          volunteer: {
            label: "স্বেচ্ছাসেবক ঘন্টা",
          },
          resolution: {
            label: "সমাধানের হার",
          },
        },
      },
      final_cta: {
        title: "প্রভাব ফেলতে প্রস্তুত তো?",
        description: "আজই একটি পরিচ্ছন্ন, নিরাপদ এবং আরও প্রতিক্রিয়াশীল সম্প্রদায় গড়ে তুলতে আপনার প্রতিবেশীদের সাথে যোগ দিন।",
        ctas: {
          primary: "অভিযোগ জানান",
          secondary: "লাইভ ম্যাপ দেখুন",
        },
      },
    },
    dashboard: {
      title: "ড্যাশবোর্ড",
      subtitle: "আপনার নাগরিক প্রভাব",
      description: "আপনার সর্বশেষ জমা দেওয়া রিপোর্টগুলি পর্যালোচনা করুন, অগ্রগতি ট্র্যাক করুন এবং দেখুন কীভাবে আপনার রিপোর্ট সামাজিক প্রক্রিয়ার মাধ্যমে এগিয়ে চলছে।",
      stats: {
        totalReports: "মোট রিপোর্ট",
        pending: "মুলতুবি",
        assigned: "বরাদ্দকৃত",
        inProgress: "প্রক্রিয়াধীন",
        resolved: "সমাধানকৃত",
      },
      gamification: {
        levelProgress: "পরবর্তী স্তরের জন্য অগ্রগতি",
        pointsRequired: "পরবর্তী স্তর {{level}} এ পৌঁছানোর জন্য {{points}} পয়েন্ট প্রয়োজন",
        dailyStreak: "দৈনিক স্ট্রিক",
        streakDays: "{{days}} দিন",
        streakTip: "আপনার স্ট্রিক বজায় রাখতে প্রতিদিন লগ ইন করুন!",
        badgesEarned: "অর্জিত ব্যাজ",
        badgesTip: "পয়েন্ট অর্জন করতে অর্জনগুলি আনলক করুন!",
        cityRank: "শহর র্যাঙ্ক",
        rankTip: "গ্লোবাল বোর্ডে আপনার অবস্থান",
        badgesTitle: "নাগরিক ব্যাজ",
        badgesSubtitle: "সামাজিক পরিচ্ছন্নতা এবং রিপোর্ট ট্র্যাকিংয়ে অবদান রেখে ব্যাজ অর্জন করুন।",
        pts: "পয়েন্ট",
        badge: "ব্যাজ",
        badges: "ব্যাজ",
      },
      leaderboard: {
        title: "শহর লিডারবোর্ড",
        subtitle: "সেরা ১০ নায়ক",
        empty: "বোর্ডে এখনো কোনো নায়ক নেই।",
        pts: "পয়েন্ট",
      },
      performance: {
        title: "কর্মক্ষমতা",
        description: "AI বিশ্লেষণ মেট্রিক্স এবং অগ্রাধিকার বণ্টন।",
        verifiedByAi: "AI দ্বারা যাচাইকৃত",
        verifiedTip: "AI বিশ্লেষণ সম্বলিত রিপোর্ট",
        highPriority: "উচ্চ অগ্রাধিকার",
        highPriorityTip: "অগ্রাধিকার স্কোর ≥ ৮০",
        averagePriority: "গড় অগ্রাধিকার",
        averagePriorityTip: "AI রিপোর্টের গড় স্কোর",
        averageConfidence: "গড় AI আত্মবিশ্বাস",
        averageConfidenceTip: "AI প্রক্রিয়াকরণের আত্মবিশ্বাস",
      },
      recentReports: {
        title: "সাম্প্রতিক রিপোর্টগুলি",
        subtitle: "আপনার জমা দেওয়া সর্বশেষ সমস্যাগুলি।",
        loading: "আপনার রিপোর্ট লোড হচ্ছে...",
        empty: "এখনো কোনো রিপোর্ট পাওয়া যায়নি। অগ্রগতি ট্র্যাক করতে আপনার প্রথম রিপোর্ট জমা দিন।",
      },
    },
    reportForm: {
      title: "একটি নাগরিক সমস্যা রিপোর্ট করুন",
      description: "সমস্যার একটি ছবি বা ছোট ভিডিও আপলোড করুন। আমাদের AI প্রমাণ বিশ্লেষণ করবে এবং উপযুক্ত বিভাগের সুপারিশ করবে।",
      uploadTitle: "প্রমাণ আপলোড করুন",
      uploadTip: "সমর্থিত ফর্ম্যাট: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "বর্ণন",
      descPlaceholder: "নাগরিক সমস্যাটি বর্ণনা করুন... (আপনি মাইক্রোফোন বোতামে ক্লিক করেও বলতে পারেন)",
      categoryLabel: "শ্রেণী",
      locationStatus: "অবস্থানের অবস্থা",
      locationDetail: {
        waiting: "ব্রাউজার অনুমতির জন্য অপেক্ষা করা হচ্ছে...",
        denied: "অবস্থানের অনুমতি প্রত্যাখ্যান করা হয়েছে। আপনি এখনও অবস্থান ছাড়াই জমা দিতে পারেন।",
        detected: "অবস্থান সনাক্ত করা হয়েছে",
        requesting: "অবস্থানের অনুরোধ করা হচ্ছে...",
      },
      locationCard: {
        address: "ঠিকানা",
        latitude: "অক্ষরেখা",
        longitude: "দ্রাঘিমারেখা",
        city: "শহর",
        region: "রাজ্য",
        accuracy: "সঠিকতা: {{accuracy}} মিটার",
      },
      buttons: {
        analyze: "AI দিয়ে বিশ্লেষণ করুন",
        analyzing: "বিশ্লেষণ করা হচ্ছে...",
        complete: "✓ AI বিশ্লেষণ সম্পন্ন",
        submit: "রিপোর্ট জমা দিন",
        submitting: "জমা দেওয়া হচ্ছে...",
        reset: "রিসেট করুন",
      },
      speech: {
        start: "ভয়েস রেকর্ডিং শুরু করুন",
        stop: "ভয়েস রেকর্ডিং বন্ধ করুন",
        unsupported: "ভয়েস-টু-টেক্সট আপনার ব্রাউজারে সমর্থিত নয়।",
      },
    },
    reports: {
      title: "আমার অভিযোগ সমূহ",
      subtitle: "রিপোর্টের ইতিহাস",
      description: "আপনার জমা দেওয়া প্রতিটি সমস্যা ব্রাউজ করুন এবং সম্প্রদায় পর্যালোচনা প্রক্রিয়ার স্থিতি আপডেট দেখুন।",
      loading: "আপনার রিপোর্ট লোড হচ্ছে...",
      empty: {
        line1: "আপনি এখনও কোনো রিপোর্ট জমা দেননি।",
        line2: "একটি নতুন সমস্যা নথিভুক্ত করতে রিপোর্ট পৃষ্ঠায় যান।",
      },
    },
    reportDetail: {
      title: "রিপোর্টের বিবরণ",
      subtitle: "লাইভ ট্র্যাকিং",
      description: "এই রিপোর্টের বর্তমান স্থিতি, বিশ্লেষণ, সময়রেখা এবং বিভাগ বরাদ্দ পর্যালোচনা করুন।",
      created: "তৈরি করা হয়েছে",
      lastUpdated: "সর্বশেষ আপডেট",
      location: "অবস্থান",
      noLocation: "অবস্থান উপলব্ধ নেই",
      assignedDept: "বরাদ্দকৃত বিভাগ",
      notAssigned: "বরাদ্দ করা হয়নি",
      aiAnalysis: {
        title: "AI বিশ্লেষণ",
        category: "শ্রেণী",
        department: "বিভাগ",
        severity: "তীব্রতা",
        priority: "অগ্রাধিকার স্কোর",
        confidence: "AI আত্মবিশ্বাস",
        summary: "সারসংক্ষেপ",
        empty: "এই রিপোর্টের জন্য কোনো AI বিশ্লেষণ উপলব্ধ নেই।",
        translating: "সারসংক্ষেপ অনুবাদ করা হচ্ছে...",
      },
      speech: {
        read: "বিষয়বস্তু জোরে পড়ুন",
        stop: "পড়া বন্ধ করুন",
      },
      notFound: {
        title: "রিপোর্ট পাওয়া যায়নি",
        description: "আপনি যে রিপোর্টটি দেখার চেষ্টা করছেন তা বিদ্যমান নেই বা এটি দেখার অনুমতি আপনার নেই।",
        back: "রিপোর্টে ফিরে যান",
      },
    },
    tracking: {
      progress: {
        title: "রিপোর্টের অগ্রগতি",
        description: "আপনার রিপোর্টের বর্তমান ধাপ ট্র্যাক করুন।",
      },
      timeline: {
        title: "ট্র্যাকিং টাইমলাইন",
        description: "সাম্প্রতিক আপডেটগুলি কালানুক্রমিক ক্রমে দেখানো হয়েছে।",
      },
      status: {
        submitted: "নাগরিক দ্বারা রিপোর্ট জমা দেওয়া হয়েছে।",
        assigned: "সংশ্লিষ্ট পৌর বিভাগে বরাদ্দ করা হয়েছে।",
        inspectionStarted: "পরিদর্শন সম্পন্ন হয়েছে, মাঠের কাজ শুরু হয়েছে।",
        inProgress: "চলমান",
        verified: "AI যাচাইকরণ সম্পন্ন হয়েছে",
        resolved: "সমস্যার সমাধান করা হয়েছে",
        closed: "রিপোর্ট বন্ধ করা হয়েছে",
        Pending: "মুলতুবি",
        Verified: "যাচাইকৃত",
        Assigned: "বরাদ্দকৃত",
        "In Progress": "প্রক্রিয়াধীন",
        Resolved: "সমাধানকৃত",
        "Issue submitted": "সমস্যা জমা দেওয়া হয়েছে",
        "AI verification completed": "এআই যাচাইকরণ সম্পন্ন হয়েছে",
        "Assigned to department": "বিভাগে বরাদ্দ করা হয়েছে",
        "Work started": "কাজ শুরু হয়েছে",
        "Issue resolved": "সমস্যা সমাধান হয়েছে",
      },
    },
    liveMap: {
      title: "লাইভ সামাজিক মানচিত্র",
      subtitle: "রিয়েল-টাইম রিপোর্টিং",
      description: "বাস্তব সময়ে সম্প্রদায় জুড়ে চলমান নাগরিক সমস্যাগুলি দেখুন এবং ট্র্যাক করুন।",
      statistics: "পরিসংখ্যান",
      legend: "নির্দেশিকা",
      filters: {
        category: "সমস্ত শ্রেণী",
        status: "সমস্ত স্থিতি",
        all: "সব",
      },
      popup: {
        department: "বরাদ্দকৃত বিভাগ",
        priority: "অগ্রাধিকার স্কোর",
        severity: "তীব্রতা",
        confidence: "AI আত্মবিশ্বাস",
        address: "ঠিকানা",
        time: "রিপোর্ট করার সময়",
        button: "লাইভ ট্র্যাকিং দেখুন →",
      },
      empty: {
        title: "কোনো নাগরিক রিপোর্ট উপলব্ধ নেই।",
        description: "নির্বাচিত ফিল্টারের সাথে কোনো সক্রিয় রিপোর্ট মিলছে না বা এতে ভৌগোলিক অবস্থানের তথ্য নেই। পরে আবার দেখুন বা নতুন রিপোর্ট জমা দিন।",
      },
      connecting: "ফায়ারবেসের সাথে সংযুক্ত হচ্ছে...",
      loading: "ইন্টারেক্টিভ মানচিত্র লোড হচ্ছে...",
    },
    badges: {
      first_report: {
        name: "প্রথম রিপোর্ট",
        description: "আপনার প্রথম নাগরিক রিপোর্ট জমা দিয়েছেন।",
      },
      five_reports: {
        name: "৫টি রিপোর্ট",
        description: "পাঁচটি নাগরিক রিপোর্ট জমা দিয়েছেন।",
      },
      ten_reports: {
        name: "১০টি রিপোর্ট",
        description: "দশটি নাগরিক রিপোর্ট জমা দিয়েছেন।",
      },
      points_100: {
        name: "১০০ হিরো পয়েন্ট",
        description: "১০০ হিরো পয়েন্টে পৌঁছেছেন।",
      },
      points_500: {
        name: "৫০০ হিরো পয়েন্ট",
        description: "৫০০ হিরো পয়েন্টে পৌঁছেছেন।",
      },
      streak_7: {
        name: "৭ দিনের স্ট্রিক",
        description: "৭ দিনের সক্রিয় স্ট্রিক বজায় রেখেছেন।",
      },
      clean_city_hero: {
        name: "পরিচ্ছন্ন শহর নায়ক",
        description: "শহর পরিষ্কার রাখতে সাহায্য করার জন্য রিপোর্ট জমা দিয়েছেন।",
      },
      traffic_guardian: {
        name: "ট্রাফিক গার্ডিয়ান",
        description: "ট্রাফিক সিগন্যাল বা নিরাপত্তা সংক্রান্ত সমস্যার রিপোর্ট করেছেন।",
      },
      environment_protector: {
        name: "পরিবেশ রক্ষক",
        description: "জল অপচয় বা নর্দমার সমস্যার রিপোর্ট করেছেন।",
      },
      community_starter: {
        name: "কমিউনিটি স্টার্টার",
      },
      civic_volunteer: {
        name: "নাগরিক স্বেচ্ছাসেবক",
      },
      community_guardian: {
        name: "কমিউনিটি গার্ডিয়ান",
      },
      city_hero: {
        name: "সিটি হিরো",
      },
      civic_champion: {
        name: "নাগরিক চ্যাম্পিয়ন",
      },
      community_legend: {
        name: "কমিউনিটি লেজেন্ড",
      },
    },
    toasts: {
      badgeUnlocked: "ব্যাজ আনলক হয়েছে",
      pointsAwarded: "+{{points}} হিরো পয়েন্ট",
    },
    categories: {
      Roads: "রাস্তাঘাট",
      Garbage: "আবর্জনা",
      Water: "জল",
      Traffic: "ট্রাফিক",
      "Street Lights": "স্ট্রিট লাইট",
      Safety: "নিরাপত্তা",
      Other: "অন্যান্য",
    },
    departments: {
      "Public Works Department": "গণপূর্ত বিভাগ",
      "Municipal Corporation": "পৌরসভা",
      "Water Department": "জল বিভাগ",
      "Traffic Police": "ট্রাফিক পুলিশ",
      "Electricity Department": "বিদ্যুৎ বিভাগ",
      "Public Safety": "জননিরাপত্তা",
      "Environment Department": "পরিবেশ বিভাগ",
      "Awaiting Assignment": "বরাদ্দের অপেক্ষায়",
    },
    severity: {
      Low: "निम्न",
      Medium: "মাঝারি",
      High: "উচ্চ",
      Critical: "সংকটজনক",
      Pending: "মুলতুবি",
    },
    admin: {
      title: "Municipal Authority Panel",
      subtitle: "Manage reports, assign departments, and track resolution metrics.",
      menu: {
        dashboard: "Dashboard",
        reports: "Reports",
        users: "Users",
        analytics: "Analytics",
      },
      dashboard: {
        total: "Total Reports",
        pending: "Pending",
        verified: "Verified",
        assigned: "Assigned",
        inProgress: "In Progress",
        resolved: "Resolved",
        highPriority: "High Priority",
        today: "Today's Reports",
        recentTitle: "Recent Activity",
        viewAll: "View All Reports",
        quickActions: "Quick Links",
        manageReports: "Manage Reports",
        manageUsers: "Manage Users",
        viewAnalytics: "View Analytics",
      },
      reports: {
        search: "Search reports...",
        allStatuses: "All Statuses",
        allCategories: "All Categories",
        allDepartments: "All Departments",
        allPriorities: "All Priorities",
        newest: "Newest First",
        oldest: "Oldest First",
        showing: "Showing",
        of: "of",
        results: "results",
        empty: "No reports found",
        emptyHint: "Try adjusting your filters or search terms.",
      },
    },
  },
};

const ta = {
  translation: {
    auth: {
      badge: "கமிஉனிட்டி ஹீரோ • பாதுகாப்பான பணிமனை",
      title: "கமிஉனிட்டி ஹீரோவிற்கான பாதுகாப்பான அணுகல்",
      description: "சிவிக் புகார்களைப் பதிவுசெய்ய, புகாரின் முன்னேற்றத்தைக் கண்காணிக்க, உங்கள் சமூகத்துடன் இணைந்து செயல்பட மற்றும் உங்கள் தனிப்பயనాக்கப்பட்ட டாஷ்போர்டை அணுக உங்கள் கூகிள் கணக்கைப் பயன்படுத்தி பாதுகாப்பாக உள்நுழையவும்.",
      signInButton: "கூகிள் மூலம் உள்நுழைக",
      signingIn: "உள்நுழைகிறது...",
      backToHome: "முகப்புப் பக்கத்திற்கு",
      indicators: {
        secure: "பாதுகாப்பான உள்நுழைவு",
        tracking: "நிகழ்நேர கண்காணிப்பு",
        ai: "AI உதவியுடன் கூடிய பணிப்பாய்வு"
      }
    },
    privacy: {
      eyebrow: "திட்டக் கொள்கை",
      title: "தனியுரிமைக் கொள்கை",
      description: "கமிUsernity ஹீரோ பயன்படுத்தும் தகவல்கள் மற்றும் தற்போதைய டெமோ அதை எவ்வாறு கையாள்கிறது என்பதற்கான எளிய கண்ணோட்டம்.",
      updated: "28 ஜூன் 2026",
      sections: {
        data_collection: {
          title: "தரவு சேகரிப்பு",
          description: "கமிUsernity ஹீரோ சிவிக் ரிப்போர்ட்டிங் டெமோவை இயக்க தேவையான தகவல்களை சேகரிக்கிறது. இதில் கூகிள் கணக்கு பெயர், மின்னஞ்சல், அறிக்கை விவரங்கள், நிலை மற்றும் நேர முத்திரைகள் இருக்கலாம்."
        },
        authentication: {
          title: "அடையாள அங்கீகாரம்",
          description: "கூகிள் உள்நுழைவு Firebase அங்கீகாரம் மூலம் கையாளப்படுகிறது. கடவுச்சொற்கள் இந்த பயன்பாட்டால் சேகரிக்கப்படுவதோ சேமிக்கப்படுவதோ இல்லை."
        },
        firebase: {
          title: "Firebase பயன்பாடு",
          description: "Firestore கணக்கு சுயவிவரத் தகவல், சமர்ப்பிக்கப்பட்ட அறிக்கை விவரங்கள், AI பகுப்பாய்வு முடிவுகள், இருப்பிட விவரங்கள் மற்றும் அறிக்கை நிலை வரலாற்றை சேமிக்கிறது."
        },
        location: {
          title: "இருப்பிட அனுமதிகள்",
          description: "நீங்கள் அறிக்கையிடும் அம்சங்களைப் பயன்படுத்தும்போது இருப்பிட அணுகல் கோரப்படுகிறது. உங்கள் உலாவியில் எப்போது வேண்டுமானாலும் இதை மாற்றிக்கொள்ளலாம்."
        },
        media: {
          title: "படம் மற்றும் வீடியோ தேர்வு",
          description: "தேர்ந்தெடுக்கப்பட்ட ஊடகம் AI பகுப்பாய்விற்காக பயன்படுத்தப்படுகிறது. இது அசல் கோப்பை Firestore-இல் சேமிக்காது."
        },
        voice: {
          title: "குரல் தொடர்பு",
          description: "உரையிலிருந்து பேச்சு மற்றும் பேச்சிலிருந்து உரை ஆகியவை உலாவியின் சொந்த வெப் ஸ்பீச் வசதிகளைப் பயன்படுத்துகின்றன. குரல் பதிவுகள் சேமிக்கப்படுவதில்லை."
        },
        cookies: {
          title: "குக்கீகள் மற்றும் உள்ளூர் சேமிப்பு",
          description: "Firebase அமர்வை பராமரிக்க குக்கீகளைப் பயன்படுத்தலாம். விளம்பர குக்கீகள் எதுவும் பயன்படுத்தப்படவில்லை."
        },
        contact: {
          title: "தொடர்பு",
          description: "தனியுரிமை கேள்விகளுக்கு தொடர்பு பக்கத்தை பயன்படுத்தவும். மின்னஞ்சல் தற்போது ஒரு டெமோ முகவரியாகும்."
        }
      }
    },
    terms: {
      eyebrow: "திட்ட நிபந்தனைகள்",
      title: "சேவை விதிமுறைகள்",
      description: "கமிUsernity ஹீரோ மற்றும் அதன் AI-உதவி அறிக்கையிடலின் பொறுப்பான பயன்பாட்டிற்கான எளிய நிபந்தனைகள்.",
      updated: "28 ஜூன் 2026",
      sections: {
        acceptable_use: {
          title: "ஏற்கத்தக்க பயன்பாடு",
          description: "கமிUsernity ஹீரோவை சட்டபூர்வமான குடிமக்கள் புகார்களுக்கு மட்டுமே பயன்படுத்தவும். தவறான அல்லது சட்டவிரோதமான தகவல்களை சமர்ப்பிக்க வேண்டாம்."
        },
        user_resp: {
          title: "பயனர் பொறுப்புகள்",
          description: "நீங்கள் சமர்ப்பிக்கும் தகவலின் துல்லியத்திற்கு நீங்களே பொறுப்பு. தேவையற்ற தனிப்பட்ட தகவல்களைத் தவிர்க்கவும்."
        },
        ownership: {
          title: "உரிமை",
          description: "நீங்கள் சமர்ப்பிக்கும் உள்ளடக்கத்தின் உரிமை உங்களுக்கே உரியது. ஆனால் அதை ஆராய திட்டத்திற்கு நீங்கள் அனுமதியளிக்கிறீர்கள்."
        },
        disclaimer: {
          title: "AI உதவி மறுப்பு",
          description: "AI முடிவுகள் துல்லியமற்றதாக இருக்கலாம். எந்தவொரு முடிவையும் எடுப்பதற்கு முன் அதை மனிதர்கள் சரிபார்க்க வேண்டும்."
        },
        notice: {
          title: "நகராட்சி டெமோ அறிவிப்பு",
          description: "இது ஒரு தீர்வு சவால் திட்டமாகும். அதிகாரப்பூர்வ அவசர புகார்களுக்கு அரசு வழிகளைப் பயன்படுத்தவும்.",
          item1: "அவசர தேவைகளுக்கு கமிUsernity ஹீரோவை பயன்படுத்த வேண்டாம்.",
          item2: "உடனடி ஆபத்து இருந்தால் உள்ளூர் அவசர சேவைகளை அழைக்கவும்.",
          item3: "காட்டப்படும் அளவீடுகள் மற்றும் குறிகாட்டிகள் விளக்க நோக்கங்களுக்காக மட்டுமே."
        },
        liability: {
          title: "பொறுப்பு வரம்பு",
          description: "இந்த திட்டம் எந்தவொரு உத்தரவாதமும் இன்றி மதிப்பீட்டு நோக்கங்களுக்காக வழங்கப்படுகிறது."
        }
      }
    },
    contact: {
      eyebrow: "தொடர்பு",
      title: "மிகவும் பதிலளிக்கக்கூடிய சமூகங்களை உருவாக்குவோம்",
      description: "குடிமக்களும் உள்ளாட்சி அமைப்புகளும் எவ்வாறு எளிதாக இணைந்து செயல்படலாம் என்பதை கமிUsernity ஹீரோ விளக்குகிறது.",
      challenge: {
        title: "Google Solution Challenge",
        desc: "பொறுப்பான AI மூலம் வெளிப்படைத்தன்மை மற்றும் அணுகல்தன்மையை எவ்வாறு மேம்படுத்தலாம் என காட்டுகிறது."
      },
      developer: {
        title: "திட்ட உருவாக்குநர்",
        name: "ஸ்ரேஸ்தா சுவாமி",
        degree: "பி.டெக் கணினி அறிவியல் & பொறியியல் (தரவு அறிவியல்)",
        institution: "SKIT ஜெய்ப்பூர்",
        focus: "AI • தரவு அறிவியல் • குடிமை தொழில்நுட்பம்"
      },
      links: {
        title: "உருவாக்குநருடன் இணையுங்கள்",
        github: "GitHub சுயவிவரம்",
        linkedin: "LinkedIn சுயவிவரம்",
        note: "ஒத்துழைப்பு மற்றும் குடிமை தொழில்நுட்ப விவாதங்களுக்கு வரவேற்கிறோம்."
      },
      form: {
        successTitle: "செய்தி தயார்",
        successMessage: "இந்த படிவம் ஒரு டெமோ மட்டுமே. இது தகவல்களை சேமிக்கவோ அனுப்பவோ செய்யாது.",
        backText: "படிவத்திற்கு திரும்பு",
        name: "பெயர்",
        email: "மின்னஞ்சல்",
        subject: "பொருள்",
        message: "செய்தி",
        placeholderName: "ஜான் டோ",
        placeholderEmail: "john@example.com",
        placeholderSubject: "நாங்கள் எவ்வாறு உதவலாம்?",
        placeholderMessage: "மேலும் விவரங்களை கூறவும்...",
        demoText: "UI டெமோ மட்டுமே—இந்த படிவம் தகவல்களை சேமிக்காது.",
        submitButton: "செய்தியை தயார் செய்"
      },
      faq: {
        eyebrow: "விரைவான பதில்கள்",
        title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        q1: "கமிUsernity ஹீரோ ஒரு அதிகாரப்பூர்வ அரசு சேவையா?",
        a1: "இல்லை. கமிUsernity ஹீரோ தற்போது ஒரு கூகிள் சொல்யூஷன் சேலஞ்ச் திட்டமாகும்."
      }
    },

    common: {
      loading: "ஏற்றப்படுகிறது...",
      error: "பிழை",
      reset: "மீட்டமை",
      submit: "சமர்ப்பி",
      cancel: "ரத்து செய்",
      back: "பின்னால் செல்",
      retry: "மீண்டும் முயற்சி செய்",
      progress: "முன்னேற்றம்",
      chooseFile: "கோப்பைத் தேர்ந்தெடு",
      camera: "கேமரா",
      dragDrop: "படம் அல்லது வீடியோவை இங்கே இழுத்து விடவும்",
      viewLiveTracking: "நேரடி கண்காணிப்பைக் காண்க",
      play: "இயக்கு",
      pause: "நிறுத்து",
      resume: "மீண்டும் தொடங்கு",
      stop: "முடி",
      preview: "முன்னோட்டம்",
      remove: "நீக்கு",
    },
    navbar: {
      home: "முகப்பு",
      report: "புகார் செய்",
      map: "லைவ் மேப்",
      dashboard: "டேஷ்போர்டு",
      myReports: "எனது புகார்கள்",
      login: "கூகுள் மூலம் உள்நுழைக",
      logout: "வெளியேறு",
      adminPanel: "நிர்வாகக் குழு",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      about: {
        title: "கமிஉனிட்டி ஹீரோ பற்றி",
        desc: "கமிUsernity ஹீரோ ஒரு AI-உதவி நாகரீக அறிக்கையிடல் தளம் ஆகும், இது குடிமக்கள் மற்றும் உள்ளாட்சி அதிகாரிகளுக்கு வெளிப்படையான சிக்கல் அறிக்கையிடல், பன்மொழி அணுகல் மற்றும் நிகழ்நேர முன்னேற்ற கண்காணிப்பு மூலம் ஒத்துழைக்க உதவுகிறது.",
      },
      tech: {
        title: "தொழில்நுட்ப அடுக்கு",
        items: {
          nextjs: "Next.js 16",
          react: "React + TypeScript",
          firebase: "Firebase + Firestore",
          ai: "Google AI Studio",
          maps: "OpenStreetMap + Leaflet",
          tailwind: "Tailwind CSS",
        },
      },
      quick_links: { title: "விரைவு இணைப்புகள்" },
      recognition: {
        title: "அங்கீகாரம்",
        badge: "Google Solution Challenge 2026",
        desc: "பொறுப்பான AI, பன்மொழி அணுகல் மற்றும் வெளிப்படையான நாகரீக வர்க்ஃப்ளோக்கள் சமூகங்கள் மற்றும் நகராட்சிகளுக்கிடையே ஒத்துழைப்பை எவ்வாறு மேம்படுத்தலாம் என்பதை நிரூபிக்க வடிவமைக்கப்பட்டது.",
      },
      challenge_tag: "Google Solution Challenge-க்காக ❤️ உடன் கட்டமைக்கப்பட்டது",
      privacy: "தனியுரிமை",
      terms: "விதிமுறைகள்",
      contact: "தொடர்பு",
      copyright: "© {{year}} கம்யூனிட்டி ஹீரோ. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
    landing: {
      hero: {
        eyebrow: "AI-ஆல் இயங்கும் குடிமை நுண்ணறிவு தளம்",
        tagline: "ஒரு அறிக்கை. ஆறு AI முகவர்கள். ஒரு வலிமையான சமூகம்.",
        headline: {
          before: "அண்டை வீட்டாரும் குரல் எழுப்பும்போது, ",
          highlight: "சமூகங்கள் மாறுகின்றன.",
        },
        description: "கம்யூனிட்டி ஹீரோ ஒரு புகைப்படம் மற்றும் குரல் குறிப்பை சரிபார்க்கப்பட்ட, முன்னுரிமை அளிக்கப்பட்ட, கண்காணிக்கக்கூடிய குடிமைச் செயலாக மாற்றுகிறது—இதனால் ஒவ்வொரு புகாரும் சரியான அதிகாரியைச் சென்றடைகிறது மற்றும் ஒவ்வொரு குடியிருப்பாளரும் தகவலறிந்து இருக்கிறார்கள்.",
        ctas: {
          primary: "புகாரைப் பதிவுசெய்",
          secondary: "லைவ் மேப்பை ஆராய்",
        },
        trust_badges: {
          "ai-powered": "AI-ஆல் இயங்குகிறது",
          "real-time": "நிகழ்நேர கண்காணிப்பு",
          "multilingual": "பன்மொழி ஆதரவு",
        },
      },
      problem: {
        eyebrow: "குடிமைப் பிரச்சனை",
        title: "புகார் செய்வது மக்களை இணைக்க வேண்டும்—அவர்களை காகித வேலைகளில் புதைக்கக் கூடாது",
        description: "பெரும்பாலான நகரங்கள் இன்னும் படிவங்கள், தொலைபேசி அழைப்புகள் மற்றும் நம்பிக்கையில் இயங்குகின்றன. குடிமக்கள் ஒரு முறை புகார் செய்கிறார்கள், பிறகு எதுவும் கேட்பதில்லை. நம்பிக்கை குறைகிறது. பிரச்சினைகள் குவிகின்றன. கம்யூனிட்டி ஹீரோ இந்த இடைவெளியை அடைக்க உள்ளது.",
        cards: {
          "black-hole": {
            title: "புகார்கள் கருந்துளைக்குள் மறைந்து விடுகின்றன",
            description: "குடிமக்கள் பிரச்சினைகளைச் சமர்ப்பிக்கிறார்கள் மற்றும் எந்தப் புதுப்பிப்பையும் பெறுவதில்லை. தெரிவுநிலை இல்லாமல், மக்கள் புகார் செய்வதை நிறுத்துகிறார்கள்—மற்றும் பிரச்சினைகள் சரிபார்க்கப்படாமல் வளர்கின்றன.",
          },
          "no-accountability": {
            title: "முடிவுக்கு யாரும் பொறுப்பேற்பதில்லை",
            description: "துறைகள் டிக்கெட்டுகளை ஒருவருக்கொருவர் மாற்றித் தருகின்றன. யார் பொறுப்பு அல்லது எப்போது வேலை தொடங்கும் என்பதை குடியிருப்பாளர்களால் பார்க்க முடியாது.",
          },
          "language-barrier": {
            title: "மொழி மக்களைத் தடுக்கிறது",
            description: "அதிகாரப்பூர்வ இணையதளங்கள் ஆங்கிலப் புலமை மற்றும் டிஜிட்டல் கல்வியறிவை அனுமானிக்கின்றன, இதனால் உதவி மிகவும் தேவைப்படும் சமூகங்களை ஒதுக்கி வைக்கின்றன.",
          },
          "slow-response": {
            title: "அவசரம் கண்ணுக்குத் தெரிவதில்லை",
            description: "ஒரு விரிதாளில் ஒரு பள்ளமும் ஒரு எரிவாயு கசிவும் ஒரே மாதிரியாகத் தெரிகின்றன. முக்கிய பிரச்சினைகள் வரிசையில் காத்திருக்கின்றன.",
          },
        },
      },
      solution: {
        eyebrow: "அறிக்கை பணிப்பாய்வு",
        title: "அறிக்கையிலிருந்து தீர்வு வரை",
        description: "கமிஉனிட்டி ஹீரோ ஒவ்வொரு அறிக்கையையும் AI-உதவியுடன் நடத்தும் நாகரீக பணிப்பாய்வு மூலம் வழிநடத்துகிறது, இது குடியிருப்பாளர்கள், உள்ளாட்சி அதிகாரிகள் மற்றும் சமூகங்களை வெளிப்படையான சிக்கல் தீர்வை நோக்கி ஒத்துழைக்க உதவுகிறது.",
        flow: {
          citizen: {
            label: "குடிமகன்",
            detail: "ஒரு புகைப்படம் எடுக்கிறார், குரல் குறிப்பு பதிவு செய்கிறார், அல்லது வரைபட பின் தட்டுகிறார்",
          },
          agents: {
            label: "AI முகவர்கள்",
            detail: "ஆறு சிறப்பு முகவர்கள் அறிக்கையை பகுப்பாய்வு, சரிபார்ப்பு மற்றும் வழித்திசை செய்கிறார்கள்",
          },
          authorities: {
            label: "அதிகாரிகள்",
            detail: "வார்டு பொறியாளர்கள் மற்றும் துறைகள் முன்னுரிமை பணி உத்தரவுகளைப் பெறுகின்றன",
          },
          community: {
            label: "சமூகம்",
            detail: "அண்டை வீட்டினர் முன்னேற்றத்தை கண்காணித்து ஒன்றாக சரிசெய்தலை சரிபார்க்கிறார்கள்",
          },
          resolution: {
            label: "தீர்வு",
            detail: "சிக்கல்கள் ஆதாரத்துடன் மூடப்படுகின்றன—மற்றும் நம்பிக்கை தெரு தெருவாக மீண்டும் கட்டமைக்கப்படுகிறது",
          },
        },
      },
      agents: {
        eyebrow: "AI முகவர் பைப்லைன்",
        title: "ஆறு முகவர்கள். ஒரு ஒருங்கிணைந்த பணிப்பாய்வு.",
        description: "குடிமக்களின் உள்ளீட்டை கட்டமைக்கப்பட்ட குடிமைத் தகவலாக மாற்றுவதில் ஒவ்வொரு திறனும் ஒரு கவனம் செலுத்திய பங்கை வகிக்கிறது, மனிதர்கள் படிக்கக்கூடிய விளக்கங்கள் மற்றும் புத்திசாலித்தனமான உதவியுடன்.",
        badges: { future_enhancement: "எதிர்கால மேம்பாடு" },
        list: {
          vision: { title: "விஷன் முகவர்", responsibility: "குடிமக்கள் அறிக்கைகளிலிருந்து புகைப்படங்கள் மற்றும் காட்சி சான்றுகளை பகுப்பாய்வு செய்கிறது." },
          geo: { title: "ஜியோ முகவர்", responsibility: "வார்டு எல்லைகள் மற்றும் அடையாளங்களுடன் சிக்கல்களை துல்லியமாக வரைபடமாக்குகிறது." },
          trust: { title: "வாலிடேஷன் முகவர்", responsibility: "அறிக்கையின் முழுமையை சரிபார்க்கிறது மற்றும் சமர்ப்பிப்பதற்கு முன் நகல் அறிக்கைகளை அடையாளம் காண உதவுகிறது." },
          priority: { title: "ப்ரயாரிட்டி முகவர்", responsibility: "விரைவான பதிலுக்காக அவசரநிலை மற்றும் சமூக தாக்கத்தை வரிசைப்படுத்துகிறது." },
          prediction: { title: "எதிர்கால கணிப்பு", responsibility: "வரலாற்று நகராட்சி வடிவங்களைப் பயன்படுத்தி சிக்கல் அதிகரிக்கும் போக்குகளை மதிப்பிடுவதற்காக வடிவமைக்கப்பட்டுள்ளது." },
          copilot: { title: "குடிமகன் உதவியாளர்", responsibility: "பன்மொழி உதவி மூலம் குடிமக்களுக்கு வழிகாட்டுகிறது, முடிவுகளை விளக்குகிறது மற்றும் சிக்கல் கண்காணிப்பை ஆதரிக்கிறது." },
        },
      },
      credibility: {
        title: "வெளிப்படையான குடிமக்கள் ஒத்துழைப்புக்காக கட்டமைக்கப்பட்டது",
        description: "கமிUsernity ஹீரோ, AI-உதவியுடன் கூடிய பணிப்பாய்வுகள், பன்மொழி அணுகல் மற்றும் வெளிப்படையான அறிக்கையிடல் எவ்வாறு குடிமக்கள் மற்றும் உள்ளாட்சி அதிகாரிகளுக்கிடையே ஒத்துழைப்பை வலுப்படுத்துகின்றன என்பதை நிரூபிக்கிறது.",
        cards: {
          ai: {
            title: "AI-உதவி அறிக்கையிடல்",
            desc: "பார்வை, இடம் மற்றும் பேச்சு பகுப்பாய்வு மூலம் அறிக்கைகளை உடனடியாக வகைப்படுத்துகிறது, சுருக்கமாக்குகிறது மற்றும் முன்னுரிமை அளிக்கிறது.",
          },
          tracking: {
            title: "வெளிப்படையான கண்காணிப்பு",
            desc: "கட்டமைக்கப்பட்ட முன்னேற்ற காலவரிசைகள் மூலம் குடியிருப்பாளர்கள் மற்றும் அதிகாரிகளை நிகழ்நேரத்தில் புதுப்பிக்கிறது.",
          },
          i18n: {
            title: "பன்மொழி அணுகல்",
            desc: "ஒருங்கிணைந்த Speech-to-Text உள்ளீடுகளுடன் இடைமுகத்தை 8 பிராந்திய மொழிகளில் மொழிபெயர்க்கிறது.",
          },
          verification: {
            title: "சமூக சரிபார்ப்பு",
            desc: "சரிபார்க்கப்பட்ட உள்ளூர் ஆயத்தொலைவுகள் மற்றும் பல-அண்டை வீட்டு உறுதிப்படுத்தல்கள் மூலம் நகராட்சி நம்பிக்கையை வளர்க்கிறது.",
          },
        },
      },

      live_tracking: {
        eyebrow: "லைவ் ட்ரேக்கிங் முன்னோட்டம்",
        title: "ஒவ்வொரு புகாரும். ஒவ்வொரு நிலையும். நிகழ்நேரத்தில்.",
        description: "குடியிருப்பாளர்களும் அதிகாரிகளும் ஒரு வெளிப்படையான டாஷ்போர்டைப் பகிர்ந்து கொள்கிறார்கள்.",
        sampleLabel: "டாஷ்போர்டு மாதிரி முன்னோட்டம்",
        labels: {
          engineerStatus: "பொறியாளர் நிலை",
          eta: "மதிப்பிடப்பட்ட நேரம்",
          verification: "சமூக சரிபார்ப்பு",
          progress: "முன்னேற்றம்",
        },
        issue: {
          category: "சாலை பழுதுபார்ப்பு",
          ward: "வார்டு 18",
          engineerStatus: "பொறியாளர் நியமிக்கப்பட்டுள்ளார் — ஆய்வு முடிந்தது",
          eta: "Estimated resolution: 4 days",
          verification: "5 இல் 3 அண்டை வீட்டார் தளத்தில் சரிபார்த்துள்ளனர்",
        },
      },
      twin: {
        eyebrow: "சமூக டிஜிட்டல் இரட்டை",
        title: "உங்கள் அக்கம், அளவிடப்பட்டு புரிந்துகொள்ளப்பட்டது",
        description: "AI புகார்கள், தீர்வுகள் மற்றும் சமூகக் கருத்துக்களை ஒரு நேரடி சுகாதார மதிப்பெண்ணில் ஒருங்கிணைக்கிறது.",
        demoLabel: "AI-ஆல் உருவாக்கப்பட்ட மாதிரி மதிப்பெண்கள்",
        scores: {
          infrastructure: {
            label: "கட்டமைப்பு",
            trend: "இந்த மாதம் +3",
          },
          safety: {
            label: "பாதுகாப்பு",
            trend: "இந்த மாதம் +5",
          },
          cleanliness: {
            label: "சுகாதாரம்",
            trend: "இந்த மாதம் +2",
          },
          water: {
            label: "தண்ணீர்",
            trend: "நிலையானது",
          },
          health: {
            label: "சமூக ஆரோக்கியம்",
            trend: "இந்த மாதம் +4",
          },
        },
      },
      google: {
        eyebrow: "தொழில்நுட்ப அடுக்கு",
        title: "AI மற்றும் திறந்த தரநிலைகளால் இயக்கப்படும் நவீன தொழில்நுட்ப அடுக்கு",
        description: "பாதுகாப்பான, பன்மொழி, AI-உதவியுடன் கூடிய குடிமை அறிக்கையை வழங்க, கமிUsernity ஹீரோ Google AI, Firebase உள்கட்டமைப்பு மற்றும் திறந்த மூல தொழில்நுட்பங்களை ஒருங்கிணைக்கிறது.",
        technologies: {
          "ai-studio": {
            category: "AI தளம்",
            title: "Google AI Studio",
            description: "ஜெமினி தளம் முழுவதும் AI-உதவியுடனான பார்வை பகுப்பாய்வு, பன்மொழி புரிதல், புத்திசாலித்தனமான சுருக்கம் மற்றும் சமூக உதவிகளை வழங்குகிறது."
          },
          firebase: {
            category: "பின்னணி",
            title: "Firebase",
            description: "Firebase அங்கீகாரம், Firestore தரவுத்தளம், பாதுகாப்பான சேமிப்பு மற்றும் நிகழ்நேர ஒத்திசைவு ஆகியவை பயன்பாட்டின் பின்னணியை இயக்குகின்றன."
          },
          maps: {
            category: "ஊடாடும் வரைபடங்கள்",
            title: "OpenStreetMap + Leaflet",
            description: "ஊடாடும் திறந்த மூல வரைபடங்கள் பிரச்சினை இருப்பிடங்கள், வார்டு எல்லைகள் மற்றும் நேரடி புவியியல் காட்சிகளை வழங்குகின்றன."
          },
          speech: {
            category: "உலாவி API",
            title: "Web Speech API",
            description: "உலாவியின் சொந்த ஸ்பீச்-டு-டெக்ஸ்ட் மற்றும் டெக்ஸ்ட்-டு-ஸ்பீச் குரல் அடிப்படையிலான அறிக்கை மற்றும் அணுகலை செயல்படுத்துகிறது."
          },
          translate: {
            category: "பன்மொழி",
            title: "AI மூலம் இயங்கும் பன்மொழி மொழிபெயர்ப்பு",
            description: "ஜெமினி மூலம் இயங்கும் பன்மொழி மொழிபெயர்ப்பு, குடிமக்கள் தங்களுக்கு விருப்பமான மொழியில் கமிUsernity ஹீரோவுடன் தொடர்பு கொள்ள உதவுகிறது."
          },
          analytics: {
            category: "காட்சிப்படுத்தல்",
            title: "சமூக பகுப்பாய்வு டாஷ்போர்டு",
            description: "ஊடாடும் டாஷ்போர்டுகள் பிரச்சினையின் புள்ளிவிவரங்கள், வகை போக்குகள், மறுமொழி காலவரிசைகள், AI நுண்ணறிவு மற்றும் சமூக சுகாதார குறிகாட்டிகளை காட்சிப்படுத்துகின்றன."
          }
        }
      },
      impact: {
        eyebrow: "சமூக தாக்கம்",
        title: "வெளிப்படைத்தன்மை ஏற்படுத்தும் வேறுபாடு",
        description: "மக்களின் நம்பிக்கைக்கு சான்றாக இவை விளங்குகின்றன.",
        demoLabel: "விளக்கத்திற்கான மாதிரி புள்ளிவிவரங்கள்",
        stats: {
          solved: {
            label: "தீர்க்கப்பட்டவை",
          },
          citizens: {
            label: "உதவிபெற்ற குடிமக்கள்",
          },
          volunteer: {
            label: "சுயசேவை நேரம்",
          },
          resolution: {
            label: "தீர்வு விகிதம்",
          },
        },
      },
      final_cta: {
        title: "தாக்கத்தை ஏற்படுத்தத் தயாரா?",
        description: "இன்றே தூய்மையான, பாதுகாப்பான மற்றும் விரைந்து செயல்படும் சமூகத்தை உருவாக்குங்கள்.",
        ctas: {
          primary: "புகார் செய்",
          secondary: "லைவ் மேப் காண்",
        },
      },
    },
    dashboard: {
      title: "டாஷ்போர்டு",
      subtitle: "உங்களது குடிமை தாக்கம்",
      description: "உங்களது சமீபத்திய புகார்களை மதிப்பாய்வு செய்யவும், முன்னேற்றத்தைக் கண்காணிக்கவும், பார்க்கவும்.",
      stats: {
        totalReports: "மொத்த புகார்கள்",
        pending: "நிலுவையில்",
        assigned: "ஒதுக்கப்பட்டது",
        inProgress: "செயல்பாட்டில்",
        resolved: "தீர்க்கப்பட்டது",
      },
      gamification: {
        levelProgress: "அடுத்த நிலைக்கு முன்னேற்றம்",
        pointsRequired: "அடுத்த நிலையை {{level}} எட்ட இன்னும் {{points}} புள்ளிகள் தேவை",
        dailyStreak: "தினசரி தொடர்ச்சி",
        streakDays: "{{days}} நாட்கள்",
        streakTip: "உங்களது தொடர்ச்சியைத் தக்கவைக்க தினமும் உள்நுழையவும்!",
        badgesEarned: "பெற்ற பேட்ஜ்கள்",
        badgesTip: "புள்ளிகளைப் பெற சாதனைகளைத் திறக்கவும்!",
        cityRank: "நகரத் தரம்",
        rankTip: "உலகளாவிய பலகையில் உங்களது நிலை",
        badgesTitle: "குடிமை பேட்ஜ்கள்",
        badgesSubtitle: "சமூகத் தூய்மை மற்றும் புகார் கண்காணிப்பில் பேட்ஜ்களைப் பெறுங்கள்.",
        pts: "புள்ளிகள்",
        badge: "பேட்ஜ்",
        badges: "பேட்ஜ்கள்",
      },
      leaderboard: {
        title: "நகரத் தரவரிசை",
        subtitle: "சிறந்த 10 வீரர்கள்",
        empty: "பலகையில் இன்னும் எந்த வீரரும் இல்லை.",
        pts: "புள்ளிகள்",
      },
      performance: {
        title: "செயல்திறன்",
        description: "AI பகுப்பாய்வு அளவீடுகள் மற்றும் முன்னுரிமை விநியோகம்.",
        verifiedByAi: "AI-ஆல் சரிபார்க்கப்பட்டது",
        verifiedTip: "AI பகுப்பாய்வு கொண்ட புகார்கள்",
        highPriority: "உயர் முன்னுரிமை",
        highPriorityTip: "முன்னுரிமை மதிப்பெண் ≥ 80",
        averagePriority: "சராசரி முன்னுरीமை",
        averagePriorityTip: "AI புகார்களின் சராசரி மதிப்பெண்",
        averageConfidence: "சராசரி AI நம்பிக்கை",
        averageConfidenceTip: "AI செயலாக்கத்தின் நம்பிக்கை நிலை",
      },
      recentReports: {
        title: "சமீபத்திய புகார்கள்",
        subtitle: "உங்களால் சமர்ப்பிக்கப்பட்ட சமீபத்திய பிரச்சினைகள்.",
        loading: "உங்களது புகார் ஏற்றப்படுகிறது...",
        empty: "இன்னும் எந்தப் புகாரும் காணப்படவில்லை. உங்களது முதல் புகாரைச் சமர்ப்பிக்கவும்.",
      },
    },
    reportForm: {
      title: "ஒரு குடிமைப் பிரச்சினையைப் புகார் செய்",
      description: "பிரச்சினையின் புகைப்படம் அல்லது குறுகிய வீடியோவை பதிவேற்றவும்.",
      uploadTitle: "ஆதாரங்களைப் பதிவேற்று",
      uploadTip: "ஆதரிக்கப்படும் வடிவங்கள்: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "விளக்கம்",
      descPlaceholder: "குடிமைப் பிரச்சினையை விவரிக்கவும்... (மைக்ரோஃபோன் பொத்தானைக் கிளிக் செய்வதன் மூலமும் நீங்கள் பேசலாம்)",
      categoryLabel: "வகை",
      locationStatus: "இருப்பிட நிலை",
      locationDetail: {
        waiting: "உலாவி அனுமதிக்காகக் காத்திருக்கிறது...",
        denied: "இருப்பிட அனுமதி மறுக்கப்பட்டது.",
        detected: "இருப்பிடம் கண்டறியப்பட்டது",
        requesting: "இருப்பிடத்தைக் கோருகிறது...",
      },
      locationCard: {
        address: "முகவரி",
        latitude: "அட்சரேகை",
        longitude: "தீர்க்கரேகை",
        city: "நகரம்",
        region: "மாநிலம்",
        accuracy: "துல்லியம்: {{accuracy}} மீட்டர்கள்",
      },
      buttons: {
        analyze: "AI மூலம் பகுப்பாய்வு செய்",
        analyzing: "பகுப்பாய்வு செய்யப்படுகிறது...",
        complete: "✓ AI பகுப்பாய்வு முடிந்தது",
        submit: "புகாரைச் சமர்ப்பி",
        submitting: "சமர்ப்பிக்கப்படுகிறது...",
        reset: "மீட்டமை",
      },
      speech: {
        start: "குரல் பதிவைத் தொடங்கு",
        stop: "குரல் பதிவை நிறுத்து",
        unsupported: "குரல் உரை மாற்றம் உங்களது உலாவியால் ஆதரிக்கப்படவில்லை.",
      },
    },
    reports: {
      title: "எனது புகார்கள்",
      subtitle: "புகார் வரலாறு",
      description: "நீங்கள் சமர்ப்பித்த பிரச்சினைகளை ஆராயுங்கள்.",
      loading: "உங்களது புகார் ஏற்றப்படுகிறது...",
      empty: {
        line1: "நீங்கள் இன்னும் எந்தப் புகாரையும் சமர்ப்பிக்கவில்லை.",
        line2: "புதிய பிரச்சினையைப் பதிவு செய்ய புகார் பக்கத்திற்குச் செல்லவும்.",
      },
    },
    reportDetail: {
      title: "புகார் விவரங்கள்",
      subtitle: "நேரடி கண்காணிப்பு",
      description: "இந்த புகாருக்கான தற்போதைய நிலை மற்றும் துறை ஒதுக்கீட்டை மதிப்பாய்வு செய்யவும்.",
      created: "உருவாக்கப்பட்டது",
      lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது",
      location: "இருப்பிடம்",
      noLocation: "இருப்பிடம் கிடைக்கவில்லை",
      assignedDept: "ஒதுக்கப்பட்ட துறை",
      notAssigned: "ஒதுக்கப்படவில்லை",
      aiAnalysis: {
        title: "AI பகுப்பாய்வு",
        category: "வகை",
        department: "துறை",
        severity: "தீவிரம்",
        priority: "முன்னுரிமை மதிப்பெண்",
        confidence: "AI நம்பிக்கை",
        summary: "சுருக்கம்",
        empty: "இந்த புகாருக்கு AI பகுப்பாய்வு எதுவும் கிடைக்கவில்லை.",
        translating: "சுருக்கம் மொழிபெயர்க்கப்படுகிறது...",
      },
      speech: {
        read: "உள்ளடக்கத்தை சத்தமாக வாசி",
        stop: "வாசிப்பதை நிறுத்து",
      },
      notFound: {
        title: "புகார் காணப்படவில்லை",
        description: "நீங்கள் பார்க்க முயற்சிக்கும் புகார் இல்லை.",
        back: "புகார்களுக்குத் திரும்பு",
      },
    },
    tracking: {
      progress: {
        title: "புகார் முன்னேற்றம்",
        description: "உங்களது புகாரின் தற்போதைய நிலையை கண்காணிக்கவும்.",
      },
      timeline: {
        title: "கண்காணிப்பு காலவரிசை",
        description: "சமீபத்திய புதுப்பிப்புகள் காலவரிசை வரிசையில் காட்டப்படுகின்றன.",
      },
      status: {
        submitted: "குடிமகனால் புகார் சமர்ப்பிக்கப்பட்டது.",
        assigned: "தொடர்புடைய நகராட்சித் துறைக்கு ஒதுக்கப்பட்டது.",
        inspectionStarted: "ஆய்வு முடிந்தது, களப்பணி தொடங்கப்பட்டது.",
        inProgress: "செயல்பாட்டில் உள்ளது",
        verified: "AI சரிபார்ப்பு முடிந்தது",
        resolved: "பிரச்சினை தீர்க்கப்பட்டது",
        closed: "புகார் மூடப்பட்டது",
        Pending: "நிலுவையில்",
        Verified: "சரிபார்க்கப்பட்டது",
        Assigned: "ஒதுக்கப்பட்டது",
        "In Progress": "செயல்பாட்டில்",
        Resolved: "தீர்க்கப்பட்டது",
        "Issue submitted": "பிரச்சனை சமர்ப்பிக்கப்பட்டது",
        "AI verification completed": "AI சரிபார்ப்பு முடிந்தது",
        "Assigned to department": "துறைக்கு ஒதுக்கப்பட்டது",
        "Work started": "வேலை தொடங்கப்பட்டது",
        "Issue resolved": "பிரச்சனை தீர்க்கப்பட்டது",
      },
    },
    liveMap: {
      title: "நேரடி சமூக வரைபடம்",
      subtitle: "நிகழ்நேர புகார்",
      description: "நிகழ்நேரத்தில் குடிமைப் பிரச்சினைகளைக் கண்டு கண்காணிக்கவும்.",
      statistics: "புள்ளிவிவரங்கள்",
      legend: "குறியீடுகள் விளக்கம்",
      filters: {
        category: "அனைத்து வகைகள்",
        status: "அனைத்து நிலைகள்",
        all: "அனைத்தும்",
      },
      popup: {
        department: "ஒதுக்கப்பட்ட துறை",
        priority: "முன்னுரிமை மதிப்பெண்",
        severity: "தீவிரம்",
        confidence: "AI நம்பிக்கை",
        address: "முகவரி",
        time: "புகார் செய்யப்பட்ட நேரம்",
        button: "நேரடி கண்காணிப்பைக் காண் →",
      },
      empty: {
        title: "குடிமைப் புகார்கள் எதுவும் இல்லை.",
        description: "பயனர்கள் சமர்ப்பித்த பின்னர் மீண்டும் பார்க்கவும்.",
      },
      connecting: "ஃபயர்பேஸுடன் இணைக்கப்படுகிறது...",
      loading: "வரைபடம் ஏற்றப்படுகிறது...",
    },
    badges: {
      first_report: {
        name: "முதல் புகார்",
        description: "உங்களது முதல் குடிமைப் புகாரைச் சமர்ப்பித்துள்ளீர்கள்.",
      },
      five_reports: {
        name: "5 புகார்கள்",
        description: "ஐந்து குடிமைப் புகார்களைச் சமர்ப்பித்துள்ளீர்கள்.",
      },
      ten_reports: {
        name: "10 புகார்கள்",
        description: "பத்து குடிமைப் புகார்களைச் சமர்ப்பித்துள்ளீர்கள்.",
      },
      points_100: {
        name: "100 ஹீரோ புள்ளிகள்",
        description: "100 ஹீரோ புள்ளிகளை எட்டியுள்ளீர்கள்.",
      },
      points_500: {
        name: "500 ஹீரோ புள்ளிகள்",
        description: "500 ஹீரோ புள்ளிகளை எட்டியுள்ளீர்கள்.",
      },
      streak_7: {
        name: "7 நாள் தொடர்ச்சி",
        description: "7 நாட்கள் தீவிரமாகப் பங்களித்துள்ளீர்கள்.",
      },
      clean_city_hero: {
        name: "தூய்மை நகர ஹீரோ",
        description: "நகரத்தைத் தூய்மைப்படுத்த ஒரு புகாரைச் சமர்ப்பித்துள்ளீர்கள்.",
      },
      traffic_guardian: {
        name: "போக்குவரத்து காவலர்",
        description: "போக்குவரத்து சிக்னல் பிரச்சினையைப் புகார் செய்துள்ளீர்கள்.",
      },
      environment_protector: {
        name: "சுற்றுச்சூழல் பாதுகாவலர்",
        description: "நீர் கசிவு அல்லது கழிவுநீர் பிரச்சினையைப் புகார் செய்துள்ளீர்கள்.",
      },
      community_starter: {
        name: "சமூகத் தொடக்க வீரர்",
      },
      civic_volunteer: {
        name: "குடிமைத் தன்னார்வலர்",
      },
      community_guardian: {
        name: "சமூகப் பாதுகாவலர்",
      },
      city_hero: {
        name: "நகர ஹீரோ",
      },
      civic_champion: {
        name: "குடிமைச் சாம்பியன்",
      },
      community_legend: {
        name: "சமூக லெஜண்ட்",
      },
    },
    toasts: {
      badgeUnlocked: "பேட்ஜ் திறக்கப்பட்டது",
      pointsAwarded: "+{{points}} ஹீரோ புள்ளிகள்",
    },
    categories: {
      Roads: "சாலைகள்",
      Garbage: "குப்பை",
      Water: "தண்ணீர்",
      Traffic: "போக்குவரத்து",
      "Street Lights": "தெரு விளக்குகள்",
      Safety: "பாதுகாப்பு",
      Other: "பிற",
    },
    departments: {
      "Public Works Department": "பொதுப்பணித்துறை",
      "Municipal Corporation": "மாநகராட்சி",
      "Water Department": "குடிநீர் வாரியம்",
      "Traffic Police": "போக்குவரத்து காவல்துறை",
      "Electricity Department": "மின்சார வாரியம்",
      "Public Safety": "பொது பாதுகாப்பு",
      "Environment Department": "சுற்றுச்சூழல் துறை",
      "Awaiting Assignment": "ஒதுக்கீட்டிற்காக காத்திருக்கிறது",
    },
    severity: {
      Low: "குறைந்த",
      Medium: "நடுத்தர",
      High: "உயர்",
      Critical: "தீவிர",
      Pending: "நிலுவையில்",
    },
    admin: {
      title: "Municipal Authority Panel",
      subtitle: "Manage reports, assign departments, and track resolution metrics.",
      menu: {
        dashboard: "Dashboard",
        reports: "Reports",
        users: "Users",
        analytics: "Analytics",
      },
      dashboard: {
        total: "Total Reports",
        pending: "Pending",
        verified: "Verified",
        assigned: "Assigned",
        inProgress: "In Progress",
        resolved: "Resolved",
        highPriority: "High Priority",
        today: "Today's Reports",
        recentTitle: "Recent Activity",
        viewAll: "View All Reports",
        quickActions: "Quick Links",
        manageReports: "Manage Reports",
        manageUsers: "Manage Users",
        viewAnalytics: "View Analytics",
      },
      reports: {
        search: "Search reports...",
        allStatuses: "All Statuses",
        allCategories: "All Categories",
        allDepartments: "All Departments",
        allPriorities: "All Priorities",
        newest: "Newest First",
        oldest: "Oldest First",
        showing: "Showing",
        of: "of",
        results: "results",
        empty: "No reports found",
        emptyHint: "Try adjusting your filters or search terms.",
      },
    },
  },
};

const te = {
  translation: {
    auth: {
      badge: "కమ్యూనిటీ హీరో • సురక్షిత కార్యస్థలం",
      title: "కమ్యూనిటీ హీరోకి సురక్షిత ప్రవేశం",
      description: "పౌర సమస్యలను నివేదించడానికి, రిపోర్ట్ పురోగతిని ట్రాక్ చేయడానికి, మీ సంఘంతో సహకరించడానికి మరియు మీ వ్యక్తిగత డాష్‌బోర్డ్‌ను యాక్సెస్ చేయడానికి మీ గూగుల్ ఖాతాను ఉపయోగించి సురక్షితంగా సైన్ ఇన్ చేయండి.",
      signInButton: "గూగుల్ తో సైన్ ఇన్ చేయండి",
      signingIn: "సైన్ ఇన్ అవుతోంది...",
      backToHome: "హోమ్‌కి తిరిగి వెళ్ళండి",
      indicators: {
        secure: "సురక్షిత లాగిన్",
        tracking: "రియల్ టైమ్ ట్రాకింగ్",
        ai: "AI సహాయ వర్క్‌ఫ్లో"
      }
    },
    privacy: {
      eyebrow: "ప్రాజెక్ట్ విధానం",
      title: "గోప్యతా విధానం",
      description: "కమ్యూనిటీ హీరో ఉపయోగించే సమాచారం మరియు ఈ డెమో దానిని ఎలా నిర్వహిస్తుందో తెలియజేసే సరళమైన వివరణ.",
      updated: "28 జూన్ 2026",
      sections: {
        data_collection: {
          title: "డేటా సేకరణ",
          description: "కమ్యూనిటీ హీరో సివిక్ రిపోర్టింగ్ నిర్వహించడానికి అవసరమైన సమాచారాన్ని సేకరిస్తుంది. ఇందులో మీ గూగుల్ ఖాతా పేరు, ఈమెయిల్, రిపోర్ట్ వివరాలు మరియు సమయం ఉండవచ్చు."
        },
        authentication: {
          title: "ధృవీకరణ",
          description: "గూగుల్ లాగిన్ Firebase ద్వారా నిర్వహించబడుతుంది. పాస్‌వర్డ్‌లు ఏవీ సేకరించబడవు లేదా నిల్వ చేయబడవు."
        },
        firebase: {
          title: "Firebase వినియోగం",
          description: "ప్రొఫైల్ సమాచారం, రిపోర్ట్ వివరాలు, AI విశ్లేషణ ఫలితాలు, స్థాన వివరాలు మరియు రిపోర్ట్ స్థితి చరిత్రను Firestore నిల్వ చేస్తుంది."
        },
        location: {
          title: "స్థాన అనుమతులు",
          description: "రిపోర్ట్ చేసేటప్పుడు బ్రౌజర్ ద్వారా లొకేషన్ యాక్సెస్ కోరబడుతుంది. బ్రౌజర్ సెట్టింగ్స్ లో దీనిని మార్చుకోవచ్చు."
        },
        media: {
          title: "చిత్రాలు మరియు వీడియో ఎంపిక",
          description: "ఎంచుకున్న మీడియాను AI విశ్లేషణ కోసం ఉపయోగిస్తాము. అసలు ఫైల్స్ Firestore లో స్టోర్ చేయబడవు."
        },
        voice: {
          title: "వాయిస్ పరస్పర చర్య",
          description: "స్పీచ్-టు-టెక్స్ట్ మరియు టెక్స్ట్-టు-స్పీచ్ బ్రౌజర్ యొక్క వెబ్ స్పీచ్ సౌకర్యాన్ని ఉపయోగిస్తాయి. వాయిస్ రికార్డింగ్‌లు నిల్వ చేయబడవు."
        },
        cookies: {
          title: "కుకీలు మరియు లోకల్ స్టోరేజ్",
          description: "Firebase లాగిన్ సెషన్ నిర్వహించడానికి బ్రౌజర్ స్టోరేజ్ ఉపయోగించవచ్చు. ఇందులో ఎలాంటి ప్రకటన కుకీలు లేవు."
        },
        contact: {
          title: "సంప్రదించండి",
          description: "గోప్యతా ప్రశ్నల కోసం సంప్రదింపు పేజీని ఉపయోగించండి. ఇమెయిల్ ప్రస్తుతం కేవలం డెమో మాత్రమే."
        }
      }
    },
    terms: {
      eyebrow: "ప్రాజెక్ట్ నిబంధనలు",
      title: "సేవా నిబంధనలు",
      description: "కమ్యూనిటీ హీరో మరియు దాని AI-సహాయక రిపోర్టింగ్ ఉపయోగించడానికి ఆచరణాత్మక నిబంధనలు.",
      updated: "28 జూన్ 2026",
      sections: {
        acceptable_use: {
          title: "అంగీకారయోగ్యమైన ఉపయోగం",
          description: "కమ్యూనిటీ హీరోని కేవలం చట్టబద్ధమైన పౌర రిపోర్టింగ్ కోసం మాత్రమే ఉపయోగించండి. వేధింపులు లేదా తప్పుడు సమాచారం పంపకండి."
        },
        user_resp: {
          title: "వినియోగదారు బాధ్యతలు",
          description: "మీరు సమర్పించే సమాచారం యొక్క ఖచ్చితత్వానికి మీరే బాధ్యులు. అనవసరమైన వ్యక్తిగత సమాచారాన్ని నివారించండి."
        },
        ownership: {
          title: "కంటెంట్ యాజమాన్యం",
          description: "మీరు సృష్టించిన కంటెంట్ యాజమాన్యం మీదే ఉంటుంది. కానీ విశ్లేషణ కోసం ప్రాజెక్ట్ కి అనుమతి ఇస్తున్నారు."
        },
        disclaimer: {
          title: "AI సహాయ నిరాకరణ",
          description: "AI ఫలితాలు అసంపూర్ణంగా ఉండవచ్చు. ఏదైనా చర్య తీసుకునే ముందు ప్రజలు పరిశీలించాలి."
        },
        notice: {
          title: "మున్సిపల్ డెమో నోటీసు",
          description: "ఇది కేవలం సొల్యూషన్ ఛాలెంజ్ ప్రాజెక్ట్ డెమో మాత్రమే. అధికారిక అత్యవసర ఛానెల్స్ ని భర్తీ చేయదు.",
          item1: "అత్యవసర పరిస్థితులకు కమ్యూనిటీ హీరోని ఉపయోగించకండి.",
          item2: "తక్షణ రక్షణ కోసం స్థానిక అత్యవసర సేవలను సంప్రదించండి.",
          item3: "చూపించిన గణాంకాలు కేవలం ఉదాహరణలు మాత్రమే."
        },
        liability: {
          title: "బాధ్యత పరిమితి",
          description: "ఈ ప్రాజెక్ట్ ఎటువంటి హామీ లేకుండా మూల్యాంకనం కోసం అందించబడింది."
        }
      }
    },
    contact: {
      eyebrow: "సంప్రదించండి",
      title: "మరింత స్పందించే సమాజాలను నిర్మిద్దాం",
      description: "పౌరులు మరియు అధికారులు ఏ విధంగా సులభంగా కలిసి పని చేయవచ్చో కమ్యూనిటీ హీరో వివరిస్తుంది.",
      challenge: {
        title: "Google Solution Challenge",
        desc: "బాధ్యతాయుతమైన AI ద్వారా పారదర్శకత మరియు యాక్సెసిబిలిటీని ఎలా పెంచవచ్చో చూపిస్తుంది."
      },
      developer: {
        title: "ప్రాజెక్ట్ డెవలపర్",
        name: "శ్రేష్ఠా స్వామి",
        degree: "బీ.టెక్ కంప్యూటర్ సైన్స్ & ఇంజనీరింగ్ (డేటా సైన్స్)",
        institution: "SKIT జైపూర్",
        focus: "AI • డేటా సైన్స్ • సివిక్ టెక్నాలజీ"
      },
      links: {
        title: "డెవలపర్ తో కనెక్ట్ అవ్వండి",
        github: "GitHub ప్రొఫైల్",
        linkedin: "LinkedIn ప్రొఫైల్",
        note: "సహకారం మరియు సివిక్ టెక్నాలజీ చర్చలకు సిద్ధంగా ఉన్నాము."
      },
      form: {
        successTitle: "సందేశం సిద్ధమైంది",
        successMessage: "ఈ ఫారమ్ కేవలం ప్రదర్శన మాత్రమే. ఇది డేటాను ఎక్కడికీ పంపదు.",
        backText: "ఫారమ్‌కి తిరిగి వెళ్ళండి",
        name: "పేరు",
        email: "ఈమెయिल్",
        subject: "విషయం",
        message: "సందేశం",
        placeholderName: "జాన్ డో",
        placeholderEmail: "john@example.com",
        placeholderSubject: "మేము ఏ విధంగా సహాయపడగలం?",
        placeholderMessage: "మరిన్ని వివరాలు తెలియజేయండి...",
        demoText: "కేవలం UI డెమో మాత్రమే—ఈ ఫారమ్ సమాచారాన్ని సేవ్ చేయదు.",
        submitButton: "సందేశాన్ని సిద్ధం చేయి"
      },
      faq: {
        eyebrow: "త్వరిత సమాధానాలు",
        title: "తరచుగా అడిగే ప్రశ్నలు",
        q1: "కమ్యూనిటీ హీరో అధికారిక ప్రభుత్వ సేవనా?",
        a1: "కాదు. కమ్యూనిటీ హీరో ప్రస్తుతం ఒక గూగుల్ సొల్యూషన్ ఛాలెంజ్ ప్రాజెక్ట్ డెమో మాత్రమే."
      }
    },

    common: {
      loading: "లోడ్ అవుతోంది...",
      error: "లోపం",
      reset: "రీసెట్",
      submit: "సమర్పించు",
      cancel: "రద్దు చేయి",
      back: "వెనుకకు",
      retry: "మళ్ళీ ప్రయత్నించు",
      progress: "పురోగతి",
      chooseFile: "ఫైల్ ఎంచుకోండి",
      camera: "కెమెరా",
      dragDrop: "ఇక్కడ చిత్రం లేదా వీడియోను లాగండి మరియు వదలండి",
      viewLiveTracking: "లైవ్ ట్రాకింగ్ చూడండి",
      play: "ప్లే చేయి",
      pause: "పాజ్ చేయి",
      resume: "మళ్ళీ ప్రారంభించు",
      stop: "ఆపు",
      preview: "ముందుచూపు",
      remove: "తీసివేయి",
    },
    navbar: {
      home: "హోమ్",
      report: "సమస్యను నివేదించు",
      map: "లైవ్ మ్యాప్",
      dashboard: "డ్యాష్‌బోర్డ్",
      myReports: "నా నివేదికలు",
      login: "గూగుల్‌తో సైన్ ఇన్ చేయండి",
      logout: "లాగ్ అవుట్",
      adminPanel: "అడ్మిన్ ప్యానెల్",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      about: {
        title: "కమ్యూనిటీ హీరో గురించి",
        desc: "కమ్యూనిటీ హీరో ఒక AI-సహాయంతో కూడిన పౌర రిపోర్టింగ్ ప్లాట్‌ఫారమ్, ఇది పౌరులు మరియు స్థానిక అధికారులను పారదర్శక సమస్య రిపోర్టింగ్, బహుభాషా యాక్సెసిబిలిటీ మరియు రియల్-టైమ్ పురోగతి ట్రాకింగ్ ద్వారా సహకరించడానికి శక్తివంతం చేస్తుంది.",
      },
      tech: {
        title: "టెక్నాలజీ స్టాక్",
        items: {
          nextjs: "Next.js 16",
          react: "React + TypeScript",
          firebase: "Firebase + Firestore",
          ai: "Google AI Studio",
          maps: "OpenStreetMap + Leaflet",
          tailwind: "Tailwind CSS",
        },
      },
      quick_links: { title: "త్వరిత లింక్‌లు" },
      recognition: {
        title: "గుర్తింపు",
        badge: "Google Solution Challenge 2026",
        desc: "బాధ్యతాయుతమైన AI, బహుభాషా యాక్సెసిబిలిటీ మరియు పారదర్శక పౌర వర్క్‌ఫ్లోలు సమాజాలు మరియు మున్సిపాలిటీల మధ్య సహకారాన్ని ఎలా బలోపేతం చేయగలవో నిరూపించడానికి రూపొందించబడింది.",
      },
      challenge_tag: "Google Solution Challenge కోసం ❤️ తో నిర్మించబడింది",
      privacy: "గోప్యత",
      terms: "నిబంధనలు",
      contact: "సంప్రదించండి",
      copyright: "© {{year}} కమ్యూనిటీ హీరో. సర్వ హక్కులు ప్రత్యేకించబడినవి.",
    },
    landing: {
      hero: {
        eyebrow: "AI-ఆధారిత పౌర మేధో ప్లాట్‌ఫాం",
        tagline: "ఒక నివేదిక. ఆరు AI ఏజెంట్లు. ఒక బలమైన సంఘం.",
        headline: {
          before: "పొరుగువారు గళమెత్తినప్పుడు, ",
          highlight: "సంఘాలు రూపాంతరం చెందుతాయి.",
        },
        description: "కమ్యూనిటీ హీరో ఒకే ఒక ఫోటో మరియు వాయిస్ నోట్‌ను ధృవీకరించబడిన, ప్రాధాన్యత కలిగిన, ట్రాక్ చేయదగిన పౌర చర్యగా మారుస్తుంది.",
        ctas: {
          primary: "సమస్యను నివేదించు",
          secondary: "లైవ్ మ్యాప్‌ను అన్వేషించు",
        },
        trust_badges: {
          "ai-powered": "AI ఆధారితం",
          "real-time": "రియల్ టైమ్ ట్రాకింగ్",
          "multilingual": "బహుభాషా మద్దతు",
        },
      },
      problem: {
        eyebrow: "పౌర సమస్య",
        title: "నివేదించడం ప్రజలను కలపాలి—కాగితపు పనుల్లో ముంచెత్తకూడదు",
        description: "పౌరులు ఒకసారి నివేదిస్తారు, ఆ తర్వాత ఏ సమాచారమూ ఉండదు. నమ్మకం దెబ్బతింటుంది.",
        cards: {
          "black-hole": {
            title: "నివేదికలు బ్లాక్ హోల్‌లో అదృశ్యమవుతాయి",
            description: "పౌరులు సమస్యలను సమర్పిస్తారు మరియు ఎటువంటి అప్‌డేట్లను పొందరు.",
          },
          "no-accountability": {
            title: "ఫలితానికి ఎవరూ బాధ్యత వహించరు",
            description: "బాధ్యులు ఎవరో లేదా పని ఎప్పుడు ప్రారంభమవుతుందో నివాసితులు చూడలేరు.",
          },
          "language-barrier": {
            title: "భాష ప్రజలను దూరం చేస్తుంది",
            description: "అధికారిక పోర్టల్స్ ఇంగ్లీష్ పరిజ్ఞానం మరియు డిజిటల్ అక్షరాస్యతను ఊహిస్తాయి.",
          },
          "slow-response": {
            title: "అత్యవసరం కనిపించదు",
            description: "బుద్ధిమంతమైన వర్గీకరణ లేకపోతే, అత్యవసర సమస్యలు వరుసలో వేచి ఉంటాయి.",
          },
        },
      },
      solution: {
        eyebrow: "రిపోర్ట్ వర్క్‌ఫ్లో",
        title: "రిపోర్ట్ నుండి పరిష్కారం వరకు",
        description: "కమ్యూనిటీ హీరో ప్రతి రిపోర్ట్‌ను AI-సహాయంతో నడిచే పౌర వర్క్‌ఫ్లో ద్వారా మార్గనిర్దేశం చేస్తుంది, ఇది పౌరులు, స్థానిక అధికారులు మరియు సమాజాలు పారదర్శక సమస్య పరిష్కారానికి సహకరించడంలో సహాయపడుతుంది.",
        flow: {
          citizen: {
            label: "పౌరుడు",
            detail: "ఫోటో తీస్తాడు, వాయిస్ నోట్ రికార్డ్ చేస్తాడు, లేదా మ్యాప్ పిన్ నొక్కుతాడు",
          },
          agents: {
            label: "AI ఏజెంట్లు",
            detail: "ఆరు ప్రత్యేక ఏజెంట్లు రిపోర్ట్‌ను విశ్లేషించి, ధృవీకరించి, రూట్ చేస్తారు",
          },
          authorities: {
            label: "అధికారులు",
            detail: "వార్డు ఇంజనీర్లు మరియు విభాగాలు ప్రాధాన్య కార్య ఆదేశాలు అందుకుంటాయి",
          },
          community: {
            label: "సమాజం",
            detail: "పొరుగువారు పురోగతిని ట్రాక్ చేస్తారు మరియు కలిసి మెరుగుదలలను ధృవీకరిస్తారు",
          },
          resolution: {
            label: "పరిష్కారం",
            detail: "సమస్యలు రుజువుతో మూసివేయబడతాయి—మరియు నమ్మకం బ్లాక్ బ్లాక్‌గా పునర్నిర్మించబడుతుంది",
          },
        },
      },
      agents: {
        eyebrow: "AI ఏజెంట్ పైప్‌లైన్",
        title: "ఆరుగురు ఏజెంట్లు. ఒక సమన్వయ వర్క్‌ఫ్లో.",
        description: "పౌరుల ఇన్‌పుట్‌ను నిర్మాణాత్మక పౌర సమాచారంగా మార్చడంలో ప్రతి సామర్థ్యం ఒక నిర్దిష్ట పాత్రను కలిగి ఉంటుంది, మానవులు చదవగలిగే వివరణలు మరియు తెలివైన సహాయం అందిస్తుంది.",
        badges: { future_enhancement: "భవిష్యత్ మెరుగుదల" },
        list: {
          vision: { title: "విజన్ ఏజెంట్", responsibility: "పౌరుల నివేదికల నుండి ఫోటోలు మరియు దృశ్య ఆధారాలను విశ్లేషిస్తుంది." },
          geo: { title: "జియో ఏజెంట్", responsibility: "సమస్యలను ఖచ్చితమైన వార్డు సరిహద్దులు మరియు ల్యాండ్‌మార్క్‌లకు మ్యాప్ చేస్తుంది." },
          trust: { title: "వాలిడేషన్ ఏజెంట్", responsibility: "నివేదిక పూర్ణతను ధృవీకరిస్తుంది మరియు సమర్పణకు ముందు నకిలీ నివేదికలను గుర్తించడంలో సహాయపడుతుంది." },
          priority: { title: "ప్రయారిటీ ఏజెంట్", responsibility: "వేగవంతమైన ప్రతిస్పందన కోసం అత్యవసరత మరియు సంఘం ప్రభావాన్ని ర్యాంక్ చేస్తుంది." },
          prediction: { title: "భవిష్యత్ అంచనా", responsibility: "చారిత్రక పురపాలక నమూనాలను ఉపయోగించి సమస్య తీవ్రమయ్యే ధోరణులను అంచనా వేయడానికి రూపొందించబడింది." },
          copilot: { title: "సిటిజన్ అసిస్టెంట్", responsibility: "బహుభాషా సహాయం ద్వారా పౌరులకు మార్గనిర్దేశం చేస్తుంది, నిర్ణయాలను వివరిస్తుంది మరియు సమస్యల ట్రాకింగ్‌కు మద్దతు ఇస్తుంది." },
        },
      },
      credibility: {
        title: "పారదర్శక పౌర సహకారం కోసం నిర్మించబడింది",
        description: "కమ్యూనిటీ హీరో, AI-సహాయంతో కూడిన వర్క్‌ఫ్లోలు, బహుభాషా యాక్సెసిబిలిటీ మరియు పారదర్శక రిపోర్టింగ్ ఎలా పౌరులు మరియు స్థానిక అధికారుల మధ్య సహకారాన్ని బలోపేతం చేయగలవో నిరూపిస్తుంది.",
        cards: {
          ai: {
            title: "AI-సహాయ రిపోర్టింగ్",
            desc: "దృష్టి, స్థానం మరియు స్పీచ్ విశ్లేషణతో రిపోర్ట్‌లను తక్షణమే వర్గీకరించి, సారాంశం చేసి, ప్రాధాన్యత ఇస్తుంది.",
          },
          tracking: {
            title: "పారదర్శక ట్రాకింగ్",
            desc: "నిర్మాణాత్మక పురోగతి టైమ్‌లైన్‌ల ద్వారా పౌరులు మరియు అధికారులను రియల్ టైమ్‌లో అప్‌డేట్ చేస్తుంది.",
          },
          i18n: {
            title: "బహుభాషా యాక్సెసిబిలిటీ",
            desc: "ఏకీకృత Speech-to-Text ఇన్‌పుట్‌లతో ఇంటర్‌ఫేస్‌ను 8 ప్రాంతీయ భాషలలోకి అనువదిస్తుంది.",
          },
          verification: {
            title: "కమ్యూనిటీ ధృవీకరణ",
            desc: "ధృవీకరించిన స్థానిక కోఆర్డినేట్‌లు మరియు బహు-పొరుగువారి నిర్ధారణల ద్వారా మునిసిపల్ నమ్మకాన్ని పెంచుతుంది.",
          },
        },
      },

      live_tracking: {
        eyebrow: "లైవ్ ట్రాకింగ్ ప్రివ్యూ",
        title: "ప్రతి నివేదిక. ప్రతి స్థితి. నిజ సమయంలో.",
        description: "నివాసితులు మరియు అధికారులు ఒక పారదర్శక డాష్‌బోర్డ్‌ను పంచుకుంటారు.",
        sampleLabel: "డాష్‌బోర్డ్ నమూనా ప్రివ్యూ",
        labels: {
          engineerStatus: "ఇంజనీర్ స్థితి",
          eta: "అంచనా సమయం",
          verification: "సామాజిక ధృవీకరణ",
          progress: "పురోగతి",
        },
        issue: {
          category: "రహదారి మరమ్మత్తు",
          ward: "వార్డు 18",
          engineerStatus: "ఇంజనీర్ కేటాయించబడ్డారు — తనిఖీ పూర్తయింది",
          eta: "Estimated resolution: 4 days",
          verification: "5 మందిలో 3 పొరుగువారు సైట్‌లో ధృవీకరించారు",
        },
      },
      twin: {
        eyebrow: "సంఘం డిజిటల్ ట్విన్",
        title: "మీ పొరుగు ప్రాంతం, కొలవబడి మరియు అర్థం చేసుకోబడింది",
        description: "AI నివేదికలను, పరిష్కారాలను మరియు సంఘం అభిప్రాయాన్ని ప్రత్యక్ష ఆరోగ్య స్కోర్‌లో క్రోడీకరిస్తుంది.",
        demoLabel: "AI-ఉత్పన్న నమూనా స్కోర్లు",
        scores: {
          infrastructure: {
            label: "మౌలిక సదుపాయాలు",
            trend: "ఈ నెలలో +3",
          },
          safety: {
            label: "భద్రత",
            trend: "ఈ నెలలో +5",
          },
          cleanliness: {
            label: "పరిశుభ్రత",
            trend: "ఈ నెలలో +2",
          },
          water: {
            label: "నీరు",
            trend: "స్థిరంగా ఉంది",
          },
          health: {
            label: "సామాజిక ఆరోగ్యం",
            trend: "ఈ నెలలో +4",
          },
        },
      },
      google: {
        eyebrow: "సాంకేతిక స్టాక్",
        title: "AI & ఓపెన్ ప్రమాణాలతో నడిచే ఆధునిక సాంకేతిక స్టాక్",
        description: "కమ్యూనిటీ హీరో సురక్షితమైన, బహుభాషా, AI-సహాయక పౌర నివేదికను అందించడానికి Google AI, Firebase మౌలిక సదుపాయాలు మరియు ఓపెన్-సోర్స్ సాంకేతికతలను మిళితం చేస్తుంది.",
        technologies: {
          "ai-studio": {
            category: "AI ప్లాట్‌ఫారమ్",
            title: "Google AI Studio",
            description: "జెమిని ప్లాట్‌ఫారమ్ అంతటా AI-సహాయక దృష్టి విశ్లేషణ, బహుభాషా అవగాహన, స్మార్ట్ సారాంశం మరియు సమాజ సహాయాన్ని అందిస్తుంది."
          },
          firebase: {
            category: "బ్యాకెండ్",
            title: "Firebase",
            description: "Firebase ప్రామాణీకరణ, Firestore డేటాబేస్, సురక్షిత నిల్వ మరియు నిజ-సమయ సమకాలీకరణ అప్లికేషన్ బ్యాకెండ్‌ను నడుపుతాయి."
          },
          maps: {
            category: "ఇంటరాక్టివ్ మ్యాప్స్",
            title: "OpenStreetMap + Leaflet",
            description: "ఇంటరాక్టివ్ ఓపెన్-సోర్స్ మ్యాప్‌లు సమస్యల స్థానాలు, వార్డు సరిహద్దులు మరియు ప్రత్యక్ష భౌగోళిక విజువలైజేషన్‌ను అందిస్తాయి."
          },
          speech: {
            category: "బ్రౌజర్ API",
            title: "Web Speech API",
            description: "బ్రౌజర్-నేటివ్ స్పీచ్-టు-టెక్స్ట్ మరియు టెక్స్ట్-టు-స్పీచ్ వాయిస్-ఆధారిత నివేదిక మరియు ప్రాప్యతను ప్రారంభిస్తాయి."
          },
          translate: {
            category: "బహుభాషా",
            title: "AI ఆధారిత బహుభాషా అనువాదం",
            description: "జెమిని-ఆధారిత బహుభాషా అనువాదం పౌరులు తమకు నచ్చిన భాషలో కమ్యూనిటీ హీరోతో కమ్యూనికేట్ చేయడానికి అనుమతిస్తుంది."
          },
          analytics: {
            category: "విజువలైజేషన్",
            title: "కమ్యూనిటీ అనలిటిక్స్ డాష్‌బోర్డ్",
            description: "ఇంటరాక్టివ్ డాష్‌బోర్డ్‌లు సమస్యల గణాంకాలు, వర్గం ట్రెండ్‌లు, ప్రతిస్పందన కాలక్రమాలు, AI అంతర్దృష్టులు మరియు సమాజ ఆరోగ్య సూచికలను చూపుతాయి."
          }
        }
      },
      impact: {
        eyebrow: "సామాజిక ప్రభావం",
        title: "పారదర్శకత చూపించే తేడా",
        description: "ఈ సంఖ్యలు ఏమి సాధ్యమో చూపిస్తాయి.",
        demoLabel: "వివరణ కోసం నమూనా గణాంకాలు",
        stats: {
          solved: {
            label: "సమస్యలు పరిష్కరించబడ్డాయి",
          },
          citizens: {
            label: "పౌరులకు సహాయం అందింది",
          },
          volunteer: {
            label: "స్వచ్ఛంద గంటలు",
          },
          resolution: {
            label: "పరిష్కార రేటు",
          },
        },
      },
      final_cta: {
        title: "ప్రభావం చూపడానికి సిద్ధంగా ఉన్నారా?",
        description: "ఈరోజే క్లీనర్, సురక్షితమైన మరియు వేగంగా స్పందించే సంఘాన్ని నిర్మించడంలో మీ పొరుగువారితో చేరండి.",
        ctas: {
          primary: "సమస్యను నివేదించు",
          secondary: "లైవ్ మ్యాప్ చూడు",
        },
      },
    },
    dashboard: {
      title: "డ్యాష్‌బోర్డ్",
      subtitle: "మీ పౌర ప్రభావం",
      description: "మీ తాజా నివేదికలను సమీక్షించండి, పురోగతిని ట్రాక్ చేయండి మరియు మీ నివేదికలు సామాజిక ప్రక్రియ ద్వారా ఎలా కదులుతున్నాయో చూడండి.",
      stats: {
        totalReports: "మొత్తం నివేదికలు",
        pending: "పెండింగ్",
        assigned: "కేటాయించబడింది",
        inProgress: "పురోగతిలో ఉంది",
        resolved: "పరిష్కరించబడింది",
      },
      gamification: {
        levelProgress: "తదుపరి స్థాయికి పురోగతి",
        pointsRequired: "తదుపరి స్థాయి {{level}} చేరుకోవడానికి ఇంకా {{points}} పాయింట్లు అవసరం",
        dailyStreak: "రోజువారీ కొనసాగింపు",
        streakDays: "{{days}} రోజులు",
        streakTip: "మీ కొనసాగింపును నిలుపుకోవడానికి ప్రతిరోజూ లాగిన్ చేయండి!",
        badgesEarned: "పొందిన బ్యాడ్జీలు",
        badgesTip: "పాయింట్లు పొందడానికి విజయాలను అన్‌లాక్ చేయండి!",
        cityRank: "నగర ర్యాంకు",
        rankTip: "గ్లోబల్ బోర్డులో మీ స్థానం",
        badgesTitle: "పౌర బ్యాడ్జీలు",
        badgesSubtitle: "సామాజిక పరిశుభ్రత మరియు నివేదిక ట్రాకింగ్‌లో సహకరించడం ద్వారా బ్యాడ్జీలను పొందండి.",
        pts: "పాయింట్లు",
        badge: "బ్యాడ్జ్",
        badges: "బ్యాడ్జీలు",
      },
      leaderboard: {
        title: "నగర ర్యాంకులు",
        subtitle: "టాప్ 10 హీరోలు",
        empty: "బోర్డులో ఇంకా ఎవరూ లేరు.",
        pts: "పాయింట్లు",
      },
      performance: {
        title: "పనితీరు",
        description: "AI విశ్లేషణ కొలతలు మరియు ప్రాధాన్యత పంపిణీ.",
        verifiedByAi: "AI ద్వారా ధృవీకరించబడింది",
        verifiedTip: "AI విశ్లేషణ కలిగిన నివేదికలు",
        highPriority: "అత్యధిక ప్రాధాన్యత",
        highPriorityTip: "ప్రాధాన్యత స్కోరు ≥ 80",
        averagePriority: "సగటు ప్రాధాన్యత",
        averagePriorityTip: "AI నివేదికల సగటు స్కోరు",
        averageConfidence: "సగటు AI విశ్వాసం",
        averageConfidenceTip: "AI ప్రాసెసింగ్ యొక్క విశ్వాసం",
      },
      recentReports: {
        title: "ఇటీవలి నివేదికలు",
        subtitle: "మీరు సమర్పించిన తాజా సమస్యలు.",
        loading: "మీ నివేదిక లోడ్ అవుతోంది...",
        empty: "ఇంకా ఎటువంటి నివేదికలూ కనుగొనబడలేదు. పురోగతిని ట్రాక్ చేయడానికి మీ మొదటి నివేదికను సమర్పించండి.",
      },
    },
    reportForm: {
      title: "ఒక పౌర సమస్యను నివేదించండి",
      description: "సమస్య యొక్క ఫోటో లేదా చిన్న వీడియోను అప్‌లోడ్ చేయండి. మా AI ఆధారాలను విశ్లేషించి తగిన విభాగాన్ని సిఫార్సు చేస్తుంది.",
      uploadTitle: "ఆధారాలను అప్‌లోడ్ చేయండి",
      uploadTip: "మద్దతు ఇచ్చే ఫార్మాట్లు: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "వివరణ",
      descPlaceholder: "పౌర సమస్యను వివరించండి... (మీరు మైక్రోఫోన్ బటన్ నొక్కి కూడా మాట్లాడవచ్చు)",
      categoryLabel: "वर्गीकरण",
      locationStatus: "స్థాన స్థితి",
      locationDetail: {
        waiting: "బ్రౌజర్ అనుమతి కోసం వేచి ఉంది...",
        denied: "స్థాన అనుమతి నిరాకరించబడింది. మీరు ఇప్పటికీ స్థానం లేకుండా సమర్పించవచ్చు.",
        detected: "స్థానం కనుగొనబడింది",
        requesting: "స్థానాన్ని అభ్యర్థిస్తోంది...",
      },
      locationCard: {
        address: "చిరునామా",
        latitude: "అక్షాంశం",
        longitude: "రేఖాంశం",
        city: "నగరం",
        region: "రాష్ట్రం",
        accuracy: "ఖచ్చితత్వం: {{accuracy}} మీటర్లు",
      },
      buttons: {
        analyze: "AIతో విశ్లేషించు",
        analyzing: "విశ్లేషిస్తోంది...",
        complete: "✓ AI విశ్లేషణ పూర్తయింది",
        submit: "निवेదికను సమర్పించు",
        submitting: "సమర్పిస్తోంది...",
        reset: "రీసెట్",
      },
      speech: {
        start: "వాయిస్ రికార్డింగ్ ప్రారంభించండి",
        stop: "వాయిస్ రికార్డింగ్ ఆపండి",
        unsupported: "వాయిస్-టు-టెక్స్ట్ మీ బ్రౌజర్ ద్వారా మద్దతు ఇవ్వబడదు.",
      },
    },
    reports: {
      title: "నా నివేదికలు",
      subtitle: "నివేదిక చరిత్ర",
      description: "మీరు సమర్పించిన ప్రతి సమస్యను బ్రౌజ్ చేయండి మరియు సంఘం సమీక్ష ప్రక్రియ నుండి స్థితి నవీకరణలను చూడండి.",
      loading: "నా నివేదికలు లోడ్ అవుతోంది...",
      empty: {
        line1: "మీరు ఇంకా ఎటువంటి నివేదికలనూ సమర్పించలేదు.",
        line2: "కొత్త సమస్యను నమోదు చేయడానికి నివేదిక పేజీకి వెళ్లండి.",
      },
    },
    reportDetail: {
      title: "నివేదిక వివరాలు",
      subtitle: "ప్రత్యక్ష ట్రాకింగ్",
      description: "ఈ నివేదిక కోసం ప్రస్తుత స్థితి, విశ్లేషణ, కాలక్రమం మరియు విభాగం కేటాయింపును సమీక్షించండి.",
      created: "సృష్టించబడింది",
      lastUpdated: "చివరిగా నవీకరించబడింది",
      location: "స్థానం",
      noLocation: "స్థానం అందుబాటులో లేదు",
      assignedDept: "కేటాయించిన విభాగం",
      notAssigned: "కేటాయించబడలేదు",
      aiAnalysis: {
        title: "AI విశ్లేషణ",
        category: "వర్గం",
        department: "విభాగం",
        severity: "తీవ్రత",
        priority: "ప్రాధాన్యత స్కోరు",
        confidence: "AI విశ్వాసం",
        summary: "సారాంశం",
        empty: "ఈ నివేదిక కోసం ఎటువంటి AI విశ్లేషణ అందుబాటులో లేదు.",
        translating: "సారాంశం అనువదించబడుతోంది...",
      },
      speech: {
        read: "కంటెంట్‌ను గట్టిగా చదవండి",
        stop: "చదవడం ఆపండి",
      },
      notFound: {
        title: "నివేదిక కనుగొనబడలేదు",
        description: "మీరు చూడటానికి ప్రయత్నిస్తున్న నివేదిక లేదు లేదా అది చూడటానికి మీకు అనుమతి లేదు.",
        back: "నివేదికలకు తిరిగి వెళ్ళండి",
      },
    },
    tracking: {
      progress: {
        title: "నివేదిక పురోగతి",
        description: "మీ నివేదిక యొక్క ప్రస్తుత దశను ట్రాక్ చేయండి.",
      },
      timeline: {
        title: "ట్రాకింగ్ టైమ్‌లైన్",
        description: "ఇటీవలి నవీకరణలు కాలక్రమ వరుసలో చూపబడ్డాయి.",
      },
      status: {
        submitted: "పౌరుడి ద్వారా నివేదిక సమర్పించబడింది.",
        assigned: "సంబంధిత మునిసిపల్ విభాగానికి కేటాయించబడింది.",
        inspectionStarted: "పరిశీలన పూర్తయింది, పనులు ప్రారంభమయ్యాయి.",
        inProgress: "పని జరుగుతోంది",
        verified: "AI ధృవీకరణ పూర్తయింది",
        resolved: "సమస్య పరిష్కరించబడింది",
        closed: "రిపోర్ట్ మూసివేయబడింది",
        Pending: "పెండింగ్",
        Verified: "ధృవీకరించబడింది",
        Assigned: "కేటాయించబడింది",
        "In Progress": "పురోగతిలో ఉంది",
        Resolved: "పరిష్కరించబడింది",
        "Issue submitted": "సమస్య సమర్పించబడింది",
        "AI verification completed": "AI ధృవీకరణ పూర్తయింది",
        "Assigned to department": "విభాగానికి కేటాయించబడింది",
        "Work started": "పని ప్రారంభమైంది",
        "Issue resolved": "సమస్య పరిష్కరించబడింది",
      },
    },
    liveMap: {
      title: "ప్రత్యక్ష సామాజిక మ్యాప్",
      subtitle: "నిజ-సమయ నివేదిక",
      description: "నిజ సమయంలో సంఘం అంతటా జరుగుతున్న పౌర సమస్యలను చూడండి మరియు ట్రాక్ చేయండి.",
      statistics: "గణాంకాలు",
      legend: "సూచిక వివరణ",
      filters: {
        category: "అన్ని వర్గాలు",
        status: "అన్ని స్థితులు",
        all: "అన్నీ",
      },
      popup: {
        department: "కేటాయించిన విభాగం",
        priority: "ప్రాధాన్యత స్కోరు",
        severity: "తీవ్రత",
        confidence: "AI విశ్వాసం",
        address: "చిరునామా",
        time: "నివేదించబడిన సమయం",
        button: "ప్రత్యక్ష ట్రాకింగ్ చూడు →",
      },
      empty: {
        title: "పౌర నివేదికలు ఏవీ అందుబాటులో లేవు.",
        description: "ఏ కొత్త నివేదికలూ లేవు.",
      },
      connecting: "ఫైర్‌బేస్‌తో అనుసంధానించబడుతోంది...",
      loading: "మ్యాప్ లోడ్ అవుతోంది...",
    },
    badges: {
      first_report: {
        name: "మొదటి నివేదిక",
        description: "మీ మొదటి పౌర నివేదికను సమర్పించారు.",
      },
      five_reports: {
        name: "5 నివేదికలు",
        description: "ಐದು పౌర నివేదికలను సమర్పించారు.",
      },
      ten_reports: {
        name: "10 నివేదికలు",
        description: "పది పౌర నివేదికలను సమర్పించారు.",
      },
      points_100: {
        name: "100 హీరో పాయింట్లు",
        description: "100 హీరో పాయింట్లను చేరుకున్నారు.",
      },
      points_500: {
        name: "500 హీరో పాయింట్లు",
        description: "500 హీరో పాయింట్లను చేరుకున్నారు.",
      },
      streak_7: {
        name: "7 రోజుల కొనసాగింపు",
        description: "7 రోజుల పాటు చురుకుగా సహకరించారు.",
      },
      clean_city_hero: {
        name: "క్లీన్ సిటీ హీరో",
        description: "నగరాన్ని శుభ్రంగా ఉంచడంలో సహాయపడటానికి నివేదికను సమర్పించారు.",
      },
      traffic_guardian: {
        name: "ట్రాఫిక్ గార్డియన్",
        description: "ట్రాఫిక్ సిగ్నల్ లేదా భద్రతా సమస్యలను నివేదించారు.",
      },
      environment_protector: {
        name: "పరియావరణ రక్షకుడు",
        description: "నీటి లీకేజీలు లేదా మురుగునీటి సమస్యలను నివేదించారు.",
      },
      community_starter: {
        name: "కమ్యూనిటీ స్టార్టర్",
      },
      civic_volunteer: {
        name: "పౌర స్వచ్ఛంద సేవకుడు",
      },
      community_guardian: {
        name: "కమ్యూనిటీ గార్డియన్",
      },
      city_hero: {
        name: "సిటీ హీరో",
      },
      civic_champion: {
        name: "పౌర ఛాంపియన్",
      },
      community_legend: {
        name: "కమ్యూనిటీ లెజెండ్",
      },
    },
    toasts: {
      badgeUnlocked: "బ్యాడ్జ్ అన్‌లాక్ చేయబడింది",
      pointsAwarded: "+{{points}} హీరో పాయింట్లు",
    },
    categories: {
      Roads: "రహదారులు",
      Garbage: "చెత్త",
      Water: "నీరు",
      Traffic: "ట్రాఫిక్",
      "Street Lights": "వీధి దీపాలు",
      Safety: "భద్రత",
      Other: "ఇతర",
    },
    departments: {
      "Public Works Department": "పబ్లిక్ వర్క్స్ డిపార్ట్‌మెంట్",
      "Municipal Corporation": "మున్సిపల్ కార్పొరేషన్",
      "Water Department": "నీటి విభాగం",
      "Traffic Police": "ట్రాఫిక్ పోలీస్",
      "Electricity Department": "విద్యుత్ విభాగం",
      "Public Safety": "ప్రజా భద్రత",
      "Environment Department": "పర్యావరణ విభాగం",
      "Awaiting Assignment": "కేటాయింపు కోసం వేచి ఉంది",
    },
    severity: {
      Low: "తక్కువ",
      Medium: "మధ్యస్థం",
      High: "ఎక్కువ",
      Critical: "క్లిష్టమైనది",
      Pending: "పెండింగ్",
    },
    admin: {
      title: "Municipal Authority Panel",
      subtitle: "Manage reports, assign departments, and track resolution metrics.",
      menu: {
        dashboard: "Dashboard",
        reports: "Reports",
        users: "Users",
        analytics: "Analytics",
      },
      dashboard: {
        total: "Total Reports",
        pending: "Pending",
        verified: "Verified",
        assigned: "Assigned",
        inProgress: "In Progress",
        resolved: "Resolved",
        highPriority: "High Priority",
        today: "Today's Reports",
        recentTitle: "Recent Activity",
        viewAll: "View All Reports",
        quickActions: "Quick Links",
        manageReports: "Manage Reports",
        manageUsers: "Manage Users",
        viewAnalytics: "View Analytics",
      },
      reports: {
        search: "Search reports...",
        allStatuses: "All Statuses",
        allCategories: "All Categories",
        allDepartments: "All Departments",
        allPriorities: "All Priorities",
        newest: "Newest First",
        oldest: "Oldest First",
        showing: "Showing",
        of: "of",
        results: "results",
        empty: "No reports found",
        emptyHint: "Try adjusting your filters or search terms.",
      },
    },
  },
};

const kn = {
  translation: {
    auth: {
      badge: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ • ಸುರಕ್ಷಿತ ಕಾರ್ಯಕ್ಷೇತ್ರ",
      title: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋಗೆ ಸುರಕ್ಷಿತ ಪ್ರವೇಶ",
      description: "ನಾಗರಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಲು, ವರದಿ ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು, ನಿಮ್ಮ ಸಮುದಾಯದೊಂದಿಗೆ ಸಹಕರಿಸಲು ಮತ್ತು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸಲು ನಿಮ್ಮ ಗೂಗಲ್ ಖಾತೆಯನ್ನು ಬಳಸಿಕೊಂಡು ಸುರಕ್ಷಿತವಾಗಿ ಸೈನ್ ಇನ್ ಮಾಡಿ.",
      signInButton: "ಗೂಗಲ್‌ನೊಂದಿಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ",
      signingIn: "ಸೈನ್ ಇನ್ ಆಗುತ್ತಿದೆ...",
      backToHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
      indicators: {
        secure: "ಸುರಕ್ಷಿತ ಲಾಗಿನ್",
        tracking: "ರಿಯಲ್-ಟೈಮ್ ಟ್ರ್ಯಾಕಿಂಗ್",
        ai: "AI ಸಹಾಯಿತ ವರ್ಕ್‌ಫ್ಲೋ"
      }
    },
    privacy: {
      eyebrow: "ಯೋಜನಾ ನಿಯಮಾವಳಿ",
      title: "ಗೋಪ್ಯತಾ ನೀತಿ",
      description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಬಳಸುವ ಮಾಹಿತಿ ಮತ್ತು ಈ ಡೆಮೊ ಅದನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದರ ಸರಳ ವಿವರಣೆ.",
      updated: "28 ಜೂನ್ 2026",
      sections: {
        data_collection: {
          title: "ಡೇಟಾ ಸಂಗ್ರಹಣೆ",
          description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ನಾಗರಿಕ ವರದಿ ಪ್ರಕ್ರಿಯೆಗಾಗಿ ಅಗತ್ಯವಿರುವ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ. ಇದರಲ್ಲಿ ನಿಮ್ಮ ಗೂಗಲ್ ಖಾತೆ ಹೆಸರು, ಇಮೇಲ್, ವರದಿ ವಿವರ ಮತ್ತು ಸಮಯ ಇರಬಹುದು."
        },
        authentication: {
          title: "ದೃಢೀಕರಣ",
          description: "ಗೂಗಲ್ ಸೈನ್-ಇನ್ Firebase ಮೂಲಕ ನಿರ್ವಹಿಸಲ್ಪಡುತ್ತದೆ. ಪಾಸ್ ವರ್ಡ್ ಗಳನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ."
        },
        firebase: {
          title: "Firebase ಬಳಕೆ",
          description: "ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿ, ವರದಿ ವಿವರಗಳು, AI ವಿಶ್ಲೇಷಣೆ ಫಲಿತಾಂಶಗಳು, ಸ್ಥಳದ ವಿವರಗಳು ಮತ್ತು ವರದಿ ಇತಿಹಾಸವನ್ನು Firestore ಸಂಗ್ರಹಿಸುತ್ತದೆ."
        },
        location: {
          title: "ಸ್ಥಳದ ಅನುಮತಿಗಳು",
          description: "ವರದಿ ಮಾಡುವಾಗ ಬ್ರೌಸರ್ ಮೂಲಕ ಸ್ಥಳದ ಅನುಮತಿ ಕೇಳಲಾಗುತ್ತದೆ. ಬ್ರೌಸರ್ ಸೆಟ್ಟಿಂಗ್ಸ್ ನಲ್ಲಿ ಇದನ್ನು ಬದಲಾಯಿಸಬಹುದು."
        },
        media: {
          title: "ಚಿತ್ರ ಮತ್ತು ವಿಡಿಯೋ ಆಯ್ಕೆ",
          description: "ಆಯ್ಕೆ ಮಾಡಿದ ಮೀಡಿಯಾವನ್ನು AI ವಿಶ್ಲೇಷಣೆಗೆ ಬಳಸಲಾಗುತ್ತದೆ. ಅಸಲಿ ಫೈಲ್ ಅನ್ನು Firestore ನಲ್ಲಿ ಉಳಿಸುವುದಿಲ್ಲ."
        },
        voice: {
          title: "ಧ್ವನಿ ಸಂವಹನ",
          description: "ವೆಬ್ ಸ್ಪಿಚ್ ಸೌಲಭ್ಯಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ. ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ಗಳನ್ನು ಸಂಗ್ರಹಿಸಿಡಲಾಗುವುದಿಲ್ಲ."
        },
        cookies: {
          title: "ಕುಕೀಸ್ ಮತ್ತು ಲೋಕಲ್ ಸ್ಟೋರೇಜ್",
          description: "Firebase ಸೈನ್-ಇನ್ ಸೆಷನ್ ನಿರ್ವಹಿಸಲು ಇದನ್ನು ಬಳಸಬಹುದು. ಯಾವುದೇ ಜಾಹೀರಾತು ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತಿಲ್ಲ."
        },
        contact: {
          title: "ಸಂಪರ್ಕಿಸಿ",
          description: "ಗೋಪ್ಯತೆ ಪ್ರಶ್ನೆಗಳಿಗಾಗಿ ಸಂಪರ್ಕ ಪುಟ ಬಳಸಿ. ಸಾರ್ವಜನಿಕ ಇಮೇಲ್ ಪ್ರಸ್ತುತ ಕೇವಲ ಡೆಮೊ ಆಗಿದೆ."
        }
      }
    },
    terms: {
      eyebrow: "ಯೋಜನೆಯ ನಿಯಮಗಳು",
      title: "ಸೇವಾ ನಿಯಮಗಳು",
      description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಮತ್ತು ಅದರ AI-ಸಹಾಯಿತ ವರದಿ ಪ್ರಕ್ರಿಯೆಯ ಜವಾಬ್ದಾರಿಯುತ ಬಳಕೆಗಾಗಿ ನಿಯಮಗಳು.",
      updated: "28 ಜೂನ್ 2026",
      sections: {
        acceptable_use: {
          title: "ಸ್ವೀಕಾರಾರ್ಹ ಬಳಕೆ",
          description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಅನ್ನು ಕಾನೂನುಬದ್ಧ ವರದಿಗಾಗಿ ಮಾತ್ರ ಬಳಸಿ. ಕಿರುಕುಳ ಅಥವಾ ಸುಳ್ಳು ವರದಿಗಳನ್ನು ಸಲ್ಲಿಸಬೇಡಿ."
        },
        user_resp: {
          title: "ಬಳಕೆದಾರರ ಜವಾಬ್ದಾರಿಗಳು",
          description: "ನೀವು ಸಲ್ಲಿಸುವ ಮಾಹಿತಿಯ ನಿಖರತೆಗೆ ನೀವೇ ಜವಾಬ್ದಾರರು. ಅನಗತ್ಯ ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಬೇಡಿ."
        },
        ownership: {
          title: "ವಿಷಯದ ಮಾಲೀಕತ್ವ",
          description: "ನೀವು ಸಲ್ಲಿಸುವ ವಿಷಯದ ಮಾಲೀಕತ್ವ ನಿಮ್ಮದೇ ಆಗಿರುತ್ತದೆ. ಆದರೆ ಅದನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಯೋಜನೆಗೆ ಅನುಮತಿ ನೀಡುತ್ತೀರಿ."
        },
        disclaimer: {
          title: "AI ಸಹಾಯ ನಿರಾಕರಣೆ",
          description: "AI ಮಾಹಿತಿ ಅಪೂರ್ಣವಾಗಿರಬಹುದು. ಯಾವುದೇ ನಿರ್ಧಾರಕ್ಕೆ ಮುನ್ನ ಜನರು ಅದನ್ನು ಪರಿಶೀಲಿಸಬೇಕು."
        },
        notice: {
          title: "ಮ್ಯುನಿಸಿಪಲ್ ಡೆಮೊ ನೋಟಿಸ್",
          description: "ಇದು ಕೇವಲ ಸಲ್ಯೂಷನ್ ಚಾಲೆಂಜ್ ಪ್ರಾಜೆಕ್ಟ್ ಡೆಮೊ ಆಗಿದೆ. ಅಧಿಕೃತ ತುರ್ತು ಸೇವೆಗಳಿಗೆ ಪರ್ಯಾಯವಲ್ಲ.",
          item1: "ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಿಗಾಗಿ ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಬಳಸಬೇಡಿ.",
          item2: "ಅಪಾಯವಿದ್ದಾಗ ಸ್ಥಳೀಯ ತುರ್ತು ಸೇವೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.",
          item3: "ತೋರಿಸಲಾದ ಅಂಕಿ-ಅಂಶಗಳು ವಿವರಣಾತ್ಮಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮಾತ್ರ."
        },
        liability: {
          title: "ಜವಾಬ್ದಾರಿಯ ಮಿತಿ",
          description: "ಯಾವುದೇ ಖಾತರಿ ಇಲ್ಲದೆ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ಈ ಯೋಜನೆಯನ್ನು ಒದಗಿಸಲಾಗಿದೆ."
        }
      }
    },
    contact: {
      eyebrow: "ಸಂಪರ್ಕಿಸಿ",
      title: "ಹೆಚ್ಚು ಸಕ್ರಿಯ ಸಮುದಾಯಗಳನ್ನು ನಿರ್ಮಿಸೋಣ",
      description: "ನಾಗರಿಕರು ಮತ್ತು ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳು ಒಟ್ಟಾಗಿ ಹೇಗೆ ಕೆಲಸ ಮಾಡಬಹುದು ಎಂಬುದನ್ನು ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ವಿವರಿಸುತ್ತದೆ.",
      challenge: {
        title: "Google Solution Challenge",
        desc: "AI ತಂತ್ರಜ್ಞಾನದಿಂದ ನಾಗರಿಕರು ಮತ್ತು ಸರ್ಕಾರದ ನಡುವಿನ ಸಹಕಾರ ಹೇಗೆ ವೃದ್ಧಿಸಬಹುದು ಎಂದು ತೋರಿಸುತ್ತದೆ."
      },
      developer: {
        title: "ಯೋಜನಾ ಡೆವಲಪರ್",
        name: "ಶ್ರೇಷ್ಠಾ ಸ್ವಾಮಿ",
        degree: "ಬಿ.ಟೆಕ್ ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ & ಎಂಜಿನಿಯರಿಂಗ್ (ಡೇಟಾ ಸೈನ್ಸ್)",
        institution: "SKIT ಜೈಪುರ",
        focus: "AI • ಡೇಟಾ ಸೈನ್ಸ್ • ನಾಗರಿಕ ತಂತ್ರಜ್ಞಾನ"
      },
      links: {
        title: "ಡೆವಲಪರ್ ಜೊತೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ",
        github: "GitHub ಪ್ರೊಫೈಲ್",
        linkedin: "LinkedIn ಪ್ರೊಫೈಲ್",
        note: "ಸಹಕಾರ ಮತ್ತು ನಾಗರಿಕ ತಂತ್ರಜ್ಞಾನ ಚರ್ಚೆಗಳಿಗೆ ಮುಕ್ತವಾಗಿದೆ."
      },
      form: {
        successTitle: "ಸಂದೇಶ ಸಿದ್ಧವಾಗಿದೆ",
        successMessage: "ಈ ಫಾರಂ ಕೇವಲ ಪ್ರದರ್ಶನಕ್ಕಾಗಿದೆ. ಯಾವುದೇ ಮಾಹಿತಿಯನ್ನು ರವಾನಿಸುವುದಿಲ್ಲ.",
        backText: "ಫಾರಂಗೆ ಮರಳಿ",
        name: "ಹೆಸರು",
        email: "ಇಮೇಲ್",
        subject: "ವಿಷಯ",
        message: "ಸಂದೇಶ",
        placeholderName: "ಜಾನ್ ಡೋ",
        placeholderEmail: "john@example.com",
        placeholderSubject: "ನಾವು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
        placeholderMessage: "ಇನ್ನಷ್ಟು ವಿವರಗಳನ್ನು ತಿಳಿಸಿ...",
        demoText: "ಕೇವಲ UI ಡೆಮೊ ಮಾತ್ರ—ಈ ಫಾರ್ಮ್ ಯಾವುದೇ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ.",
        submitButton: "ಸಂದೇಶ ಸಿದ್ಧಪಡಿಸಿ"
      },
      faq: {
        eyebrow: "ತ್ವರಿತ ಉತ್ತರಗಳು",
        title: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
        q1: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಸೇವೆಯೇ?",
        a1: "ಅಲ್ಲ. ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಪ್ರಸ್ತುತ ಕೇವಲ ಗೂಗಲ್ ಸಲ್ಯೂಷನ್ ಚಾಲೆಂಜ್ ಯೋಜನೆಯಾಗಿದೆ."
      }
    },

    common: {
      loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      error: "ದೋಷ",
      reset: "ಮರುಹೊಂದಿಸಿ",
      submit: "ಸಲ್ಲಿಸು",
      cancel: "ರದ್ದುಮಾಡು",
      back: "ಹಿಂದಕ್ಕೆ ಹೋಗು",
      retry: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸು",
      progress: "ಪ್ರಗತಿ",
      chooseFile: "ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ",
      camera: "ಕ್ಯಾಮೆರಾ",
      dragDrop: "ಚಿತ್ರ ಅಥವಾ ವೀಡಿಯೊವನ್ನು ಇಲ್ಲಿ ಎಳೆದು ಹಾಕಿ",
      viewLiveTracking: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ವೀಕ್ಷಿಸಿ",
      play: "ಪ್ಲೇ ಮಾಡಿ",
      pause: "ವಿರಾಮಗೊಳಿಸಿ",
      resume: "ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ",
      stop: "ನಿಲ್ಲಿಸಿ",
      preview: "ಮುನ್ನೋಟ",
      remove: "ತೆಗೆದುಹಾಕಿ",
    },
    navbar: {
      home: "ಮುಖಪುಟ",
      report: "ಸಮಸ್ಯೆ ವರದಿ ಮಾಡಿ",
      map: "ಲೈವ್ ನಕ್ಷೆ",
      dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      myReports: "ನನ್ನ ವರದಿಗಳು",
      login: "ಗೂಗಲ್ ಮೂಲಕ ಸೈನ್ ಇನ್ ಮಾಡಿ",
      logout: "ಲಾಗ್ ಔಟ್",
      adminPanel: "ಅಡ್ಮಿನ್ \u0caa್ಯಾನಲ್",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      about: {
        title: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಬಗ್ಗೆ",
        desc: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಒಂದು AI-ಸಹಾಯಿತ ನಾಗರಿಕ ವರದಿ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಆಗಿದ್ದು, ಇದು ನಾಗರಿಕರು ಮತ್ತು ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳಿಗೆ ಪಾರದರ್ಶಕ ಸಮಸ್ಯೆ ವರದಿ, ಬಹುಭಾಷಾ ಪ್ರವೇಶಸಾಧ್ಯತೆ ಮತ್ತು ರಿಯಲ್-ಟೈಮ್ ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಮೂಲಕ ಸಹಕರಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.",
      },
      tech: {
        title: "ತಂತ್ರಜ್ಞಾನ ಸ್ಟ್ಯಾಕ್",
        items: {
          nextjs: "Next.js 16",
          react: "React + TypeScript",
          firebase: "Firebase + Firestore",
          ai: "Google AI Studio",
          maps: "OpenStreetMap + Leaflet",
          tailwind: "Tailwind CSS",
        },
      },
      quick_links: { title: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು" },
      recognition: {
        title: "ಮಾನ್ಯತೆ",
        badge: "Google Solution Challenge 2026",
        desc: "ಜವಾಬ್ದಾರಿಯುತ AI, ಬಹುಭಾಷಾ ಪ್ರವೇಶಸಾಧ್ಯತೆ ಮತ್ತು ಪಾರದರ್ಶಕ ನಾಗರಿಕ ವರ್ಕ್‌ಫ್ಲೋಗಳು ಸಮುದಾಯಗಳು ಮತ್ತು ಮ್ಯುನಿಸಿಪಾಲಿಟಿಗಳ ನಡುವಿನ ಸಹಕಾರವನ್ನು ಹೇಗೆ ಬಲಪಡಿಸಬಹುದು ಎಂಬುದನ್ನು ಪ್ರದರ್ಶಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",
      },
      challenge_tag: "Google Solution Challenge ಗಾಗಿ ❤️ ನೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ",
      privacy: "ಗೌಪ್ಯತೆ",
      terms: "ನಿಯಮಗಳು",
      contact: "ಸಂಪರ್ಕಿಸಿ",
      copyright: "© {{year}} ಕಮ್ಯೂನಿಟಿ ಹೀರೋ. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    },
    landing: {
      hero: {
        eyebrow: "AI-ಚಾಲಿತ ನಾಗರಿಕ ಗುಪ್ತಚರ ವೇದಿಕೆ",
        tagline: "ಒಂದು ವರದಿ. ಆರು AI ಏಜೆಂಟ್‌ಗಳು. ಒಂದು ಬಲಿಷ್ಠ ಸಮುದಾಯ.",
        headline: {
          before: "ನೆರೆಹೊರೆಯವರು ಧ್ವನಿ ಎತ್ತಿದಾಗ, ",
          highlight: "ಸಮುದಾಯಗಳು ಬದಲಾಗುತ್ತವೆ.",
        },
        description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಕೇವಲ ಒಂದು ಫೋಟೋ ಮತ್ತು ಧ್ವನಿ ಟಿಪ್ಪಣಿಯನ್ನು ಪರಿಶೀಲಿಸಿದ ನಾಗರಿಕ ಕ್ರಿಯೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ.",
        ctas: {
          primary: "ಸಮಸ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ",
          secondary: "ಲೈವ್ ನಕ್ಷೆ ಅನ್ವೇಷಿಸಿ",
        },
        trust_badges: {
          "ai-powered": "AI ಚಾಲಿತ",
          "real-time": "ನೈಜ-ಸಮಯದ ಟ್ರ್ಯಾಕಿಂಗ್",
          "multilingual": "ಬಹುವಿಧ ಭಾಷಾ ಬೆಂಬಲ",
        },
      },
      problem: {
        eyebrow: "ನಾಗರಿಕ ಸಮಸ್ಯೆ",
        title: "ವರದಿ ಮಾಡುವುದು ಜನರನ್ನು ಸಂಪರ್ಕಿಸಬೇಕು—ಕಾಗದದ ಕೆಲಸಗಳಲ್ಲಿ ಮುಳುಗಿಸಬಾರದು",
        description: "ನಾಗರಿಕರು ಒಮ್ಮೆ ವರದಿ ಮಾಡುತ್ತಾರೆ, ಆ ನಂತರ ಯಾವುದೇ ಮಾಹಿತಿ ಇರುವುದಿಲ್ಲ. ನಂಬಿಕೆ ಕುಸಿಯುತ್ತದೆ.",
        cards: {
          "black-hole": {
            title: "ವರದಿಗಳು ಕಪ್ಪುಕುಳಿಯಲ್ಲಿ ಕಣ್ಮರೆಯಾಗುತ್ತವೆ",
            description: "ನಾಗರಿಕರು ಸಮಸ್ಯೆಗಳನ್ನು ಸಲ್ಲಿಸುತ್ತಾರೆ ಆದರೆ ಯಾವುದೇ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯುವುದಿಲ್ಲ.",
          },
          "no-accountability": {
            title: "ಫಲಿತಾಂಶಕ್ಕೆ ಯಾರೂ ಜವಾಬ್ದಾರರಲ್ಲ",
            description: "ಜವಾಬ್ದಾರರು ಯಾರು ಅಥವಾ ಕೆಲಸ ಯಾವಾಗ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ನಿವಾಸಿಗಳು ನೋಡಲು ಸಾಧ್ಯವಿಲ್ಲ.",
          },
          "language-barrier": {
            title: "ಭಾಷೆ ಜನರನ್ನು ದೂರವಿಡುತ್ತದೆ",
            description: "ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳು ಇಂಗ್ಲಿಷ್ ಭಾಷೆಯ ಜ್ಞಾನ ಮತ್ತು ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆಯನ್ನು ಊಹಿಸುತ್ತವೆ.",
          },
          "slow-response": {
            title: "ತುರ್ತು ಪರಿಸ್ถಿತಿ ಗೋಚರಿಸುವುದಿಲ್ಲ",
            description: "ಬುದ್ಧಿವಂತ ಆದ್ಯತೆಯ ವರ್ಗೀಕರಣವಿಲ್ಲದೆ, ಪ್ರಮುಖ ಸಮಸ್ಯೆಗಳು ಸಾಲಿನಲ್ಲಿ ಕಾಯುತ್ತವೆ.",
          },
        },
      },
      solution: {
        eyebrow: "ವರದಿ ವರ್ಕ್‌ಫ್ಲೋ",
        title: "ವರದಿಯಿಂದ ಪರಿಹಾರದವರೆಗೆ",
        description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಪ್ರತಿ ವರದಿಯನ್ನು AI-ಸಹಾಯಿತ ನಾಗರಿಕ ವರ್ಕ್‌ಫ್ಲೋ ಮೂಲಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ, ಇದು ನಿವಾಸಿಗಳು, ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳು ಮತ್ತು ಸಮುದಾಯಗಳು ಪಾರದರ್ಶಕ ಸಮಸ್ಯೆ ಪರಿಹಾರಕ್ಕಾಗಿ ಸಹಕರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        flow: {
          citizen: {
            label: "ನಾಗರಿಕ",
            detail: "ಫೋಟೋ ತೆಗೆಯುತ್ತಾರೆ, ಧ್ವನಿ ಟಿಪ್ಪಣಿ ರೆಕಾರ್ಡ್ ಮಾಡುತ್ತಾರೆ, ಅಥವಾ ನಕ್ಷೆ ಪಿನ್ ಟ್ಯಾಪ್ ಮಾಡುತ್ತಾರೆ",
          },
          agents: {
            label: "AI ಏಜೆಂಟ್‌ಗಳು",
            detail: "ಆರು ವಿಶೇಷ ಏಜೆಂಟ್‌ಗಳು ವರದಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ಪರಿಶೀಲಿಸಿ ಮತ್ತು ರೂಟ್ ಮಾಡುತ್ತಾರೆ",
          },
          authorities: {
            label: "ಅಧಿಕಾರಿಗಳು",
            detail: "ವಾರ್ಡ್ ಎಂಜಿನಿಯರ್‌ಗಳು ಮತ್ತು ಇಲಾಖೆಗಳು ಆದ್ಯತೆಯ ಕೆಲಸದ ಆದೇಶಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತವೆ",
          },
          community: {
            label: "ಸಮುದಾಯ",
            detail: "ನೆರೆಹೊರೆಯವರು ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾರೆ ಮತ್ತು ಒಟ್ಟಾಗಿ ಸರಿಪಡಿಸುವಿಕೆಯನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ",
          },
          resolution: {
            label: "ಪರಿಹಾರ",
            detail: "ಸಮಸ್ಯೆಗಳು ಪುರಾವೆಯೊಂದಿಗೆ ಮುಚ್ಚಲ್ಪಡುತ್ತವೆ—ಮತ್ತು ನಂಬಿಕೆ ಬ್ಲಾಕ್ ಬ್ಲಾಕ್‌ನಿಂದ ಪುನರ್ನಿರ್ಮಾಣಗೊಳ್ಳುತ್ತದೆ",
          },
        },
      },
      agents: {
        eyebrow: "AI ಏಜೆಂಟ್ ಪೈಪ್‌ಲೈನ್",
        title: "ಆರು ಏಜೆಂಟ್‌ಗಳು. ಒಂದು ಸಂಘಟಿತ ಕೆಲಸದ ಹರಿವು.",
        description: "ನಾಗರಿಕರ ಇನ್‌ಪುಟ್ ಅನ್ನು ರಚನಾತ್ಮಕ ನಾಗರಿಕ ಮಾಹಿತಿಯಾಗಿ ಪರಿವರ್ತಿಸುವಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಸಾಮರ್ಥ್ಯವು ಕೇಂದ್ರಿತ ಪಾತ್ರವನ್ನು ಹೊಂದಿದೆ, ಮಾನವ-ಓದಬಲ್ಲ ವಿವರಣೆಗಳು ಮತ್ತು ಬುದ್ಧಿವಂತ ಸಹಾಯವನ್ನು ಹೊಂದಿದೆ.",
        badges: { future_enhancement: "ಭವಿಷ್ಯದ ಸುಧಾರಣೆ" },
        list: {
          vision: { title: "ವಿಷನ್ ಏಜೆಂಟ್", responsibility: "ನಾಗರಿಕರ ವರದಿಗಳಿಂದ ಫೋಟೋಗಳು ಮತ್ತು ದೃಶ್ಯ ಸಾಕ್ಷ್ಯಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ." },
          geo: { title: "ಜಿಯೋ ಏಜೆಂಟ್", responsibility: "ಸಮಸ್ಯೆಗಳನ್ನು ನಿಖರವಾದ ವಾರ್ಡ್ ಗಡಿಗಳು ಮತ್ತು ಹೆಗ್ಗುರುತುಗಳಿಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ." },
          trust: { title: "ವ್ಯಾಲಿಡೇಶನ್ ಏಜೆಂಟ್", responsibility: "ವರದಿಯ ಸಂಪೂರ್ಣತೆಯನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು ಸಲ್ಲಿಸುವ ಮೊದಲು ನಕಲಿ ವರದಿಗಳನ್ನು ಗುರುತಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ." },
          priority: { title: "ಪ್ರಯಾರಿಟಿ ಏಜೆಂಟ್", responsibility: "ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆಗಾಗಿ ತುರ್ತು ಮತ್ತು ಸಮುದಾಯದ ಪ್ರಭಾವವನ್ನು ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ." },
          prediction: { title: "ಭವಿಷ್ಯದ ಮುನ್ಸೂಚನೆ", responsibility: "ಐತಿಹಾಸಿಕ ಮುನ್ಸಿಪಲ್ ಮಾದರಿಗಳನ್ನು ಬಳಸಿ ಸಮಸ್ಯೆ ಹೆಚ್ಚಾಗುವ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ." },
          copilot: { title: "ನಾಗರಿಕ ಸಹಾಯಕ", responsibility: "ಬಹುಭಾಷಾ ಸಹಾಯದ ಮೂಲಕ ನಾಗರಿಕರಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ, ನಿರ್ಧಾರಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ ಮತ್ತು ಸಮಸ್ಯೆ ಟ್ರ್ಯಾಕಿಂಗ್ ಅನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ." },
        },
      },
      credibility: {
        title: "ಪಾರದರ್ಶಕ ನಾಗರಿಕ ಸಹಕಾರಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ",
        description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ, AI-ಸಹಾಯಿತ ವರ್ಕ್‌ಫ್ಲೋಗಳು, ಬಹುಭಾಷಾ ಪ್ರವೇಶಸಾಧ್ಯತೆ ಮತ್ತು ಪಾರದರ್ಶಕ ವರದಿ ಹೇಗೆ ನಾಗರಿಕರು ಮತ್ತು ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳ ನಡುವಿನ ಸಹಕಾರವನ್ನು ಬಲಪಡಿಸಬಹುದು ಎಂಬುದನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.",
        cards: {
          ai: {
            title: "AI-ಸಹಾಯ ವರದಿ",
            desc: "ದೃಷ್ಟಿ, ಸ್ಥಳ ಮತ್ತು ಭಾಷಣ ವಿಶ್ಲೇಷಣೆಯೊಂದಿಗೆ ವರದಿಗಳನ್ನು ತಕ್ಷಣ ವರ್ಗೀಕರಿಸಿ, ಸಾರಾಂಶ ಮಾಡಿ ಮತ್ತು ಆದ್ಯತೆ ನೀಡುತ್ತದೆ.",
          },
          tracking: {
            title: "ಪಾರದರ್ಶಕ ಟ್ರ್ಯಾಕಿಂಗ್",
            desc: "ರಚನಾತ್ಮಕ ಪ್ರಗತಿ ಕಾಲಮಿತಿಗಳ ಮೂಲಕ ನಿವಾಸಿಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳನ್ನು ನೈಜ ಸಮಯದಲ್ಲಿ ಅಪ್‌ಡೇಟ್ ಮಾಡುತ್ತದೆ.",
          },
          i18n: {
            title: "ಬಹುಭಾಷಾ ಪ್ರವೇಶಸಾಧ್ಯತೆ",
            desc: "ಏಕೀಕೃತ Speech-to-Text ಇನ್‌ಪುಟ್‌ಗಳೊಂದಿಗೆ ಇಂಟರ್‌ಫೇಸ್ ಅನ್ನು 8 ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳಿಗೆ ಭಾಷಾಂತರಿಸುತ್ತದೆ.",
          },
          verification: {
            title: "ಸಮುದಾಯ ಪರಿಶೀಲನೆ",
            desc: "ಪರಿಶೀಲಿಸಿದ ಸ್ಥಳೀಯ ನಿರ್ದೇಶಾಂಕಗಳು ಮತ್ತು ಬಹು-ನೆರೆಹೊರೆ ದೃಢೀಕರಣಗಳ ಮೂಲಕ ಮ್ಯುನಿಸಿಪಲ್ ನಂಬಿಕೆ ನಿರ್ಮಿಸುತ್ತದೆ.",
          },
        },
      },

      live_tracking: {
        eyebrow: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಪೂರ್ವವೀಕ್ಷಣೆ",
        title: "ಪ್ರತಿ ವರದಿ. ಪ್ರತಿ ಸ್ಥಿತಿ. ನೈಜ ಸಮಯದಲ್ಲಿ.",
        description: "ನಿವಾಸಿಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳು ಪಾರದರ್ಶಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ.",
        sampleLabel: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಮಾದರಿ ಪೂರ್ವವೀಕ್ಷಣೆ",
        labels: {
          engineerStatus: "ಎಂಜಿನಿಯರ್ ಸ್ಥಿತಿ",
          eta: "ಅಂದಾಜು ಸಮಯ",
          verification: "ಸಮುದಾಯ ಪರಿಶೀಲನೆ",
          progress: "ಪ್ರಗತಿ",
        },
        issue: {
          category: "ರಸ್ತೆ ದುರಸ್ತಿ",
          ward: "ವಾರ್ಡ್ 18",
          engineerStatus: "ಎಂಜಿನಿಯರ್ ನಿಯೋಜಿಸಲಾಗಿದೆ — ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
          eta: "Estimated resolution: 4 days",
          verification: "5 ರಲ್ಲಿ 3 ನೆರೆಹೊರೆಯವರು ಸ್ಥಳದಲ್ಲೇ ಪರಿಶೀಲಿಸಿದ್ದಾರೆ",
        },
      },
      twin: {
        eyebrow: "ಸಮುದಾಯ ಡಿಜಿಟಲ್ ಟ್ವಿನ್",
        title: "ನಿಮ್ಮ ನೆರೆಹೊರೆ, ಅಳೆಯಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಅರ್ಥೈಸಲ್ಪಟ್ಟಿದೆ",
        description: "AI ವರದಿಗಳು, ಪರಿಹಾರಗಳು ಮತ್ತು ಸಮುದಾಯದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಸಕ್ರಿಯ ಆರೋಗ್ಯ ಸ್ಕೋರ್‌ನಲ್ಲಿ ಸಂಯೋಜಿಸುತ್ತದೆ.",
        demoLabel: "AI-ರಚಿಸಿದ ಮಾದರಿ ಸ್ಕೋರ್‌ಗಳು",
        scores: {
          infrastructure: {
            label: "ಮೂಲಸೌಕರ್ಯ",
            trend: "ಈ ತಿಂಗಳು +3",
          },
          safety: {
            label: "ಸುರಕ್ಷತೆ",
            trend: "ಈ ತಿಂಗಳು +5",
          },
          cleanliness: {
            label: "ಸ್ವಚ್ಛತೆ",
            trend: "ಈ ತಿಂಗಳು +2",
          },
          water: {
            label: "ನೀರು",
            trend: "ಸ್ಥಿರವಾಗಿದೆ",
          },
          health: {
            label: "ಸಮುದಾಯ ಆರೋಗ್ಯ",
            trend: "ಈ ತಿಂಗಳು +4",
          },
        },
      },
      google: {
        eyebrow: "ತಂತ್ರಜ್ಞಾನ ಸ್ಟ್ಯಾಕ್",
        title: "AI ಮತ್ತು ಮುಕ್ತ ಮಾನದಂಡಗಳಿಂದ ಚಾಲಿತ ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನ ಸ್ಟ್ಯಾಕ್",
        description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಸುರಕ್ಷಿತ, ಬಹುಭಾಷಾ, AI-ಸಹಾಯಿತ ನಾಗರಿಕ ವರದಿಯನ್ನು ಒದಗಿಸಲು Google AI, Firebase ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಮುಕ್ತ-ಮೂಲ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ.",
        technologies: {
          "ai-studio": {
            category: "AI ಪ್ಲಾಟ್‌ಫಾರ್ಮ್",
            title: "Google AI Studio",
            description: "ಜೆಮಿನಿ ಇಡೀ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನಲ್ಲಿ AI-ಸಹಾಯಿತ ದೃಷ್ಟಿ ವಿಶ್ಲೇಷಣೆ, ಬಹುಭಾಷಾ ತಿಳುವಳಿಕೆ, ಸ್ಮಾರ್ಟ್ ಸಾರಾಂಶ ಮತ್ತು ಸಮುದಾಯ ಸಹಾಯವನ್ನು ಒದಗಿಸುತ್ತದೆ."
          },
          firebase: {
            category: "ಬ್ಯಾಕೆಂಡ್",
            title: "Firebase",
            description: "Firebase ದೃಢೀಕರಣ, Firestore ಡೇಟಾಬೇಸ್, ಸುರಕ್ಷಿತ ಸಂಗ್ರಹಣೆ ಮತ್ತು ರಿಯಲ್-ಟೈಮ್ ಸಿಂಕ್ರೊನೈಸೇಶನ್ ಅಪ್ಲಿಕೇಶನ್ ಬ್ಯಾಕೆಂಡ್ ಅನ್ನು ಚಾಲನೆ ಮಾಡುತ್ತದೆ."
          },
          maps: {
            category: "ಇಂಟರಾಕ್ಟಿವ್ ನಕ್ಷೆಗಳು",
            title: "OpenStreetMap + Leaflet",
            description: "ಇಂಟರಾಕ್ಟಿವ್ ಓಪನ್-ಸೋರ್ಸ್ ನಕ್ಷೆಗಳು ಸಮಸ್ಯೆಗಳ ಸ್ಥಳ, ವಾರ್ಡ್ ಗಡಿಗಳು ಮತ್ತು ಲೈವ್ ಭೌಗೋಳಿಕ ದೃಶ್ಯೀಕರಣವನ್ನು ನೀಡುತ್ತವೆ."
          },
          speech: {
            category: "ಬ್ರೌಸರ್ API",
            title: "Web Speech API",
            description: "ಬ್ರೌಸರ್-ಸ್ಥಳೀಯ ಸ್ಪೀಚ್-ಟು-ಟೆಕ್ಸ್ಟ್ ಮತ್ತು ಟೆಕ್ಸ್ಟ್-ಟು-ಸ್ಪೀಚ್ ಧ್ವನಿ ಆಧಾರಿತ ವರದಿ ಮತ್ತು ಪ್ರವೇಶವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ."
          },
          translate: {
            category: "ಬಹುಭಾಷಾ",
            title: "AI ಆಧಾರಿತ ಬಹುಭಾಷಾ ಅನುವಾದ",
            description: "ಜೆಮಿನಿ-ಚಾಲಿತ ಬಹುಭಾಷಾ ಅನುವಾದವು ನಾಗರಿಕರು ತಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯಲ್ಲಿ ಕಮ್ಯೂನಿಟಿ ಹೀರೋನೊಂದಿಗೆ ಸಂವಹನ ನಡೆಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ."
          },
          analytics: {
            category: "ದೃಶ್ಯೀಕರಣ",
            title: "ಸಮುದಾಯ ಅನಾಲಿಟಿಕ್ಸ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            description: "ಇಂಟರಾಕ್ಟಿವ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು ಸಮಸ್ಯೆ ಅಂಕಿಅಂಶಗಳು, ವರ್ಗ ಪ್ರವೃತ್ತಿಗಳು, ಪ್ರತಿಕ್ರಿಯೆ ಟೈಮ್‌ಲೈನ್‌ಗಳು, AI ಒಳನೋಟಗಳು ಮತ್ತು ಸಮುದಾಯ ಆರೋಗ್ಯ ಸೂಚಕಗಳನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತವೆ."
          }
        }
      },
      impact: {
        eyebrow: "ಸಮುದಾಯ ಪ್ರಭಾವ",
        title: "ಪಾರದರ್ಶಕತೆ ತರುವ ವ್ಯತ್ಯಾಸ",
        description: "ಈ ಸಂಖ್ಯೆಗಳು ಏನು ಸಾಧ್ಯ ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತವೆ.",
        demoLabel: "ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾದರಿ ಅಂಕಿಅಂಶಗಳು",
        stats: {
          solved: {
            label: "ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸಲಾಗಿದೆ",
          },
          citizens: {
            label: "ನಾಗರಿಕರಿಗೆ ಸಹಾಯ ಮಾಡಲಾಗಿದೆ",
          },
          volunteer: {
            label: "ಸ್ವಯಂಸೇವಕ ಗಂಟೆಗಳು",
          },
          resolution: {
            label: "ಪರಿಹಾರ ದರ",
          },
        },
      },
      final_cta: {
        title: "ಪ್ರಭಾವ ಬೀರಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
        description: "ಇಂದೇ ಸ್ವಚ್ಛವಾದ, ಸುರಕ್ಷಿತವಾದ ಮತ್ತು ಹೆಚ್ಚು ಸ್ಪಂದಿಸುವ ಸಮುದಾಯವನ್ನು ನಿರ್ಮಿಸುವಲ್ಲಿ ನಿಮ್ಮ ನೆರೆಹೊರೆಯವರೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ.",
        ctas: {
          primary: "ಸಮಸ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ",
          secondary: "ಲೈವ್ ನಕ್ಷೆ ನೋಡಿ",
        },
      },
    },
    dashboard: {
      title: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      subtitle: "ನಿಮ್ಮ ನಾಗರಿಕ ಪ್ರಭಾವ",
      description: "ನಿಮ್ಮ ಇತ್ತೀಚಿನ ವರದಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ವರದಿಗಳು ಸಾಮಾಜಿಕ ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ಹೇಗೆ ಚಲಿಸುತ್ತಿವೆ ಎಂಬುದನ್ನು ನೋಡಿ.",
      stats: {
        totalReports: "ಒಟ್ಟು ವರದಿಗಳು",
        pending: "ಬಾಕಿ ಇದೆ",
        assigned: "ನಿಯೋಜಿಸಲಾಗಿದೆ",
        inProgress: "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
        resolved: "ಪರಿಹರಿಸಲಾಗಿದೆ",
      },
      gamification: {
        levelProgress: "ಮುಂದಿನ ಹಂತಕ್ಕೆ ಪ್ರಗತಿ",
        pointsRequired: "ಮುಂದಿನ ಹಂತ {{level}} ತಲುಪಲು ಇನ್ನು {{points}} ಪಾಯಿಂಟ್‌ಗಳು ಬೇಕು",
        dailyStreak: "ದೈನಂದಿನ ಸರಣಿ",
        streakDays: "{{days}} ದಿನಗಳು",
        streakTip: "ನಿಮ್ಮ ಸರಣಿಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಲು ಪ್ರತಿದಿನ ಲಾಗ್ ಇನ್ ಮಾಡಿ!",
        badgesEarned: "ಗಳಿಸಿದ ಬ್ಯಾಡ್ಜ್‌ಗಳು",
        badgesTip: "ಪಾಯಿಂಟ್‌ಗಳನ್ನು ಗಳಿಸಲು ಸಾಧನೆಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಿ!",
        cityRank: "ನಗರಿ ಶ್ರೇಣಿ",
        rankTip: "ಜಾಗತಿಕ ಬೋರ್ಡ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಸ್ಥಾನ",
        badgesTitle: "ನಾಗರಿಕ ಬ್ಯಾಡ್ಜ್‌ಗಳು",
        badgesSubtitle: "ಸಾಮಾಜಿಕ ಸ್ವಚ್ಛತೆ ಮತ್ತು ವರದಿ ಟ್ರ್ಯಾಕಿಂಗ್‌ನಲ್ಲಿ ಕೊಡುಗೆ ನೀಡುವ ಮೂಲಕ ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಗಳಿಸಿ.",
        pts: "ಪಾಯಿಂಟ್‌ಗಳು",
        badge: "ಬ್ಯಾಡ್ಜ್",
        badges: "ಬ್ಯಾಡ್ಜ್‌ಗಳು",
      },
      leaderboard: {
        title: "ನಗರ ಶ್ರೇಣಿ ಪಟ್ಟಿ",
        subtitle: "ಅಗ್ರ 10 ಹೀರೋಗಳು",
        empty: "ಬೋರ್ಡ್‌ನಲ್ಲಿ ಇನ್ನೂ ಯಾರೂ ಇಲ್ಲ.",
        pts: "ಪಾಯಿಂಟ್‌ಗಳು",
      },
      performance: {
        title: "ಕಾರ್ಯಕ್ಷಮತೆ",
        description: "AI ವಿಶ್ಲೇಷಣೆ ಮೆಟ್ರಿಕ್‌ಗಳು ಮತ್ತು ಆದ್ಯತೆಯ ವಿತರಣೆ.",
        verifiedByAi: "AI ಮೂಲಕ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
        verifiedTip: "AI ವಿಶ್ಲೇಷಣೆ ಹೊಂದಿರುವ ವರದಿಗಳು",
        highPriority: "ಹೆಚ್ಚಿನ ಆದ್ಯತೆ",
        highPriorityTip: "ಆದ್ಯತೆಯ ಸ್ಕೋರು ≥ 80",
        averagePriority: "ಸರಾಸರಿ ಆದ್ಯತೆ",
        averagePriorityTip: "AI ವರದಿಗಳ ಸರಾಸರಿ ಸ್ಕೋರು",
        averageConfidence: "ಸರಾಸರಿ AI ವಿಶ್ವಾಸ",
        averageConfidenceTip: "AI ಪ್ರಕ್ರಿಯೆಯ ವಿಶ್ವಾಸಾರ್ಹತೆ",
      },
      recentReports: {
        title: "ಇತ್ತೀಚಿನ ವರದಿಗಳು",
        subtitle: "ನೀವು ಸಲ್ಲಿಸಿದ ಇತ್ತೀಚಿನ ಸಮಸ್ಯೆಗಳು.",
        loading: "ನಿಮ್ಮ ವರದಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        empty: "ಇನ್ನೂ ಯಾವುದೇ ವರದಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ನಿಮ್ಮ ಮೊದಲ ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿ.",
      },
    },
    reportForm: {
      title: "ನಾಗರಿಕ ಸಮಸ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ",
      description: "ಸಮಸ್ಯೆಯ ಫೋಟೋ ಅಥವಾ ಸಣ್ಣ ವೀಡಿಯೊವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ನಮ್ಮ AI ಪುರಾವೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ ಮತ್ತು ಸೂಕ್ತವಾದ ಇಲಾಖೆಯನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ.",
      uploadTitle: "ಪುರಾವೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      uploadTip: "ಬೆಂಬಲಿತ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳು: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "ವಿವರಣೆ",
      descPlaceholder: "ನಾಗರಿಕ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ... (ನೀವು ಮೈಕ್ರೊಫೋನ್ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಮಾತನಾಡಬಹುದು)",
      categoryLabel: "ವರ್ಗ",
      locationStatus: "ಸ್ಥಳದ ಸ್ಥಿತಿ",
      locationDetail: {
        waiting: "ಬ್ರೌಸರ್ ಅನುಮತಿಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ...",
        denied: "ಸ್ಥಳದ ಅನುಮತಿಯನ್ನು ನಿರಾಕರಿಸಲಾಗಿದೆ. ನೀವು ಇನ್ನೂ ಸ್ಥಳವಿಲ್ಲದೆ ಸಲ್ಲಿಸಬಹುದು.",
        detected: "ಸ್ಥಳ ಪತ್ತೆಯಾಗಿದೆ",
        requesting: "ಸ್ಥಳವನ್ನು ವಿನಂತಿಸಲಾಗುತ್ತಿದೆ...",
      },
      locationCard: {
        address: "ವಿಳಾಸ",
        latitude: "ಅಕ್ಷಾಂಶ",
        longitude: "ರೇಖಾಂಶ",
        city: "ನಗರ",
        region: "ರಾಜ್ಯ",
        accuracy: "ನಿಖರತೆ: {{accuracy}} ಮೀಟರ್‌ಗಳು",
      },
      buttons: {
        analyze: "AI ನೊಂದಿಗೆ ವಿಶ್ಲೇಷಿಸಿ",
        analyzing: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
        complete: "✓ AI ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
        submit: "ವರದಿ ಸಲ್ಲಿಸಿ",
        submitting: "ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...",
        reset: "ಮರುಹೊಂದಿಸಿ",
      },
      speech: {
        start: "ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ",
        stop: "ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ",
        unsupported: "ಧ್ವನಿಯಿಂದ ಪಠ್ಯಕ್ಕೆ ಬದಲಾಯಿಸುವುದನ್ನು ನಿಮ್ಮ ಬ್ರೌಸರ್ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ.",
      },
    },
    reports: {
      title: "ನನ್ನ ವರದಿಗಳು",
      subtitle: "ವರದಿ ಇತಿಹಾಸ",
      description: "ನೀವು ಸಲ್ಲಿಸಿದ ಪ್ರತಿಯೊಂದು ಸಮಸ್ಯೆಯನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ ಮತ್ತು ಸಮುದಾಯ ಪರಿಶೀಲನಾ ಪ್ರಕ್ರಿಯೆಯಿಂದ ಸ್ಥಿತಿ ನವೀಕರಣಗಳನ್ನು ನೋಡಿ.",
      loading: "ನಿಮ್ಮ ವರದಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      empty: {
        line1: "ನೀವು ಇನ್ನೂ ಯಾವುದೇ ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿಲ್ಲ.",
        line2: "ಹೊಸ ಸಮಸ್ಯೆಯನ್ನು ದಾಖಲಿಸಲು ವರದಿ ಪುಟಕ್ಕೆ ಹೋಗಿ.",
      },
    },
    reportDetail: {
      title: "ವರದಿ ವಿವರಗಳು",
      subtitle: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್",
      description: "ಈ ವರದಿಗಾಗಿ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ, ವಿಶ್ಲೇಷಣೆ, ಸಮಯದ ಸಾಲು ಮತ್ತು ಇಲಾಖೆಯ ನಿಯೋಜನೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
      created: "ರಚಿಸಲಾಗಿದೆ",
      lastUpdated: "ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ",
      location: "ಸ್ಥಳ",
      noLocation: "ಸ್ಥಳ ಲಭ್ಯವಿಲ್ಲ",
      assignedDept: "ನಿಯೋಜಿಸಲಾದ ಇಲಾಖೆ",
      notAssigned: "ನಿಯೋಜಿಸಲಾಗಿಲ್ಲ",
      aiAnalysis: {
        title: "AI ವಿಶ್ಲೇಷಣೆ",
        category: "ವರ್ಗ",
        department: "ಇಲಾಖೆ",
        severity: "ತೀವ್ರತೆ",
        priority: "ಆದ್ಯತೆಯ ಸ್ಕೋರು",
        confidence: "AI ವಿಶ್ವಾಸ",
        summary: "ಸಾರಾಂಶ",
        empty: "ಈ ವರದಿಗಾಗಿ ಯಾವುದೇ AI ವಿಶ್ಲೇಷಣೆ ಲಭ್ಯವಿಲ್ಲ.",
        translating: "ಸಾರಾಂಶವನ್ನು ಅನುವಾದಿಸಲಾಗುತ್ತಿದೆ...",
      },
      speech: {
        read: "ವಿಷಯವನ್ನು ಜೋರಾಗಿ ಓದಿ",
        stop: "ಓದುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
      },
      notFound: {
        title: "ವರದಿ ಕಂಡುಬಂದಿಲ್ಲ",
        description: "ನೀವು ನೋಡಲು ಪ್ರಯತ್ನಿಸುತ್ತಿರುವ ವರದಿಯು ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ ಅಥವಾ ಅದನ್ನು ನೋಡಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.",
        back: "ವರದಿಗಳಿಗೆ ಹಿಂತಿರುಗಿ",
      },
    },
    tracking: {
      progress: {
        title: "ವರದಿ ಪ್ರಗತಿ",
        description: "ನಿಮ್ಮ ವರದಿಯ ಪ್ರಸ್ತುತ ಹಂತವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
      },
      timeline: {
        title: "ಟ್ರ್ಯಾಕಿಂಗ್ ಟೈಮ್‌ಲೈನ್",
        description: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳು ಕಾಲಾನುಕ್ರಮದ ಕ್ರಮದಲ್ಲಿ ತೋರಿಸಲಾಗಿದೆ.",
      },
      status: {
        submitted: "ನಾಗರಿಕರಿಂದ ವರದಿ ಸಲ್ಲಿಕೆಯಾಗಿದೆ.",
        assigned: "ಸಂಬಂಧಿತ ಮ್ಯುನಿಸಿಪಲ್ ಇಲಾಖೆಗೆ ನಿಯೋಜಿಸಲಾಗಿದೆ.",
        inspectionStarted: "ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ, ಕೆಲಸ ಪ್ರಾರಂಭವಾಗಿದೆ.",
        inProgress: "ಕೆಲಸ ಪ್ರಗತಿಯಲ್ಲಿದೆ",
        verified: "AI ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
        resolved: "ಸಮಸ್ಯೆ ಬಗೆಹರಿದಿದೆ",
        closed: "ವರದಿ ಮುಚ್ಚಲಾಗಿದೆ",
        Pending: "ಬಾಕಿ ಇದೆ",
        Verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
        Assigned: "ನಿಯೋಜಿಸಲಾಗಿದೆ",
        "In Progress": "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
        Resolved: "ಪರಿಹರಿಸಲಾಗಿದೆ",
        "Issue submitted": "ಸಮಸ್ಯೆ ಸಲ್ಲಿಸಲಾಗಿದೆ",
        "AI verification completed": "AI ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
        "Assigned to department": "ಇಲಾಖೆಗೆ ನಿಯೋಜಿಸಲಾಗಿದೆ",
        "Work started": "ಕೆಲಸ ಪ್ರಾರಂಭವಾಗಿದೆ",
        "Issue resolved": "ಸಮಸ್ಯೆ ಪರಿಹರಿಸಲಾಗಿದೆ",
      },
    },
    liveMap: {
      title: "ಲೈವ್ ಸಮುದಾಯ ನಕ್ಷೆ",
      subtitle: "ನೈಜ-ಸಮಯದ ವರದಿ",
      description: "ನೈಜ ಸಮಯದಲ್ಲಿ ಸಮುದಾಯದಾದ್ಯಂತ ನಡೆಯುತ್ತಿರುವ ನಾಗರಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ನೋಡಿ ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
      statistics: "ಅಂಕಿಅಂಶಗಳು",
      legend: "ಸೂಚಕ ವಿವರಣೆ",
      filters: {
        category: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
        status: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು",
        all: "ಎಲ್ಲಾ",
      },
      popup: {
        department: "ನಿಯೋಜಿಸಲಾದ ಇಲಾಖೆ",
        priority: "ಆದ್ಯತೆಯ ಸ್ಕೋರು",
        severity: "ತೀವ್ರತೆ",
        confidence: "AI ವಿಶ್ವಾಸ",
        address: "ವಿಳಾಸ",
        time: "ವರದಿಯಾದ ಸಮಯ",
        button: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ನೋಡಿ →",
      },
      empty: {
        title: "ಯಾವುದೇ ನಾಗರಿಕ ವರದಿಗಳು ಲಭ್ಯವಿಲ್ಲ.",
        description: "ಯಾವುದೇ ಹೊಸ ವರದಿಗಳಿಲ್ಲ.",
      },
      connecting: "ಫೈರ್‌ಬೇಸ್‌ಗೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ...",
      loading: "ನಕ್ಷೆಯನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    },
    badges: {
      first_report: {
        name: "ಮೊದಲ ವರದಿ",
        description: "ನಿಮ್ಮ ಮೊದಲ ನಾಗರಿಕ ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿದ್ದೀರಿ.",
      },
      five_reports: {
        name: "5 ವರದಿಗಳು",
        description: "ಐದು ನಾಗರಿಕ ವರದಿಗಳನ್ನು ಸಲ್ಲಿಸಿದ್ದೀರಿ.",
      },
      ten_reports: {
        name: "10 ವರದಿಗಳು",
        description: "ಹತ್ತು ನಾಗರಿಕ ವರದಿಗಳನ್ನು ಸಲ್ಲಿಸಿದ್ದೀರಿ.",
      },
      points_100: {
        name: "100 ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳು",
        description: "100 ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳನ್ನು ತಲುಪಿದ್ದೀರಿ.",
      },
      points_500: {
        name: "500 ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳು",
        description: "500 ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳನ್ನು ತಲುಪಿದ್ದೀರಿ.",
      },
      streak_7: {
        name: "7 ದಿನಗಳ ಸರಣಿ",
        description: "7 ದಿನಗಳ ಕಾಲ ಸಕ್ರಿಯವಾಗಿ ಸಹಕರಿಸಿದ್ದೀರಿ.",
      },
      clean_city_hero: {
        name: "ಸ್ವಚ್ಛ ನಗರ ಹೀರೋ",
        description: "ನಗರವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಲು ಸಹಾಯ ಮಾಡಲು ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿದ್ದೀರಿ.",
      },
      traffic_guardian: {
        name: "ಟ್ರಾಫಿಕ್ ಗಾರ್ಡಿಯನ್",
        description: "ಟ್ರಾಫಿಕ್ ಸಿಗ್ನಲ್ ಅಥವಾ ಸುರಕ್ಷತಾ ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿದ್ದೀರಿ.",
      },
      environment_protector: {
        name: "ಪರಿಸರ ರಕ್ಷಕ",
        description: "ನೀರಿನ ಸೋರಿಕೆ ಅಥವಾ ಒಳಚರಂಡಿ ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿದ್ದೀರಿ.",
      },
      community_starter: {
        name: "ಕಮ್ಯೂನಿಟಿ ಸ್ಟಾರ್ಟರ್",
      },
      civic_volunteer: {
        name: "ನಾಗರಿಕ ಸ್ವಯಂಸೇವಕ",
      },
      community_guardian: {
        name: "ಕಮ್ಯೂನಿಟಿ ಗಾರ್ಡಿಯನ್",
      },
      city_hero: {
        name: "ಸಿಟಿ ಹೀರೋ",
      },
      civic_champion: {
        name: "ನಾಗರಿಕ ಚಾಂಪಿಯನ್",
      },
      community_legend: {
        name: "ಕಮ್ಯೂನಿಟಿ ಲೆಜೆಂಡ್",
      },
    },
    toasts: {
      badgeUnlocked: "ಬ್ಯಾಡ್ಜ್ ಅನ್‌ಲಾಕ್ ಆಗಿದೆ",
      pointsAwarded: "+{{points}} ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳು",
    },
    categories: {
      Roads: "ರಸ್ತೆಗಳು",
      Garbage: "ಕಸ",
      Water: "ನೀರು",
      Traffic: "ಸಂಚಾರ",
      "Street Lights": "ಬೀದಿ ದೀಪಗಳು",
      Safety: "ಸುರಕ್ಷತೆ",
      Other: "ಇತರೆ",
    },
    departments: {
      "Public Works Department": "ಲೋಕೋಪಯೋಗಿ ಇಲಾಖೆ",
      "Municipal Corporation": "ಮಹಾನಗರ್ ಪಾಲಿಕೆ",
      "Water Department": "ಜಲ ಇಲಾಖೆ",
      "Traffic Police": "ಸಂಚಾರ ಪೊಲೀಸ್",
      "Electricity Department": "ವಿದ್ಯುತ್ ಇಲಾಖೆ",
      "Public Safety": "ಸಾರ್ವಜನಿಕ ಸುರಕ್ಷತೆ",
      "Environment Department": "ಪರಿಸರ ಇಲಾಖೆ",
      "Awaiting Assignment": "ನಿಯೋಜನೆಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ",
    },
    severity: {
      Low: "ಕಡಿಮೆ",
      Medium: "ಮಧ್ಯಮ",
      High: "ಹೆಚ್ಚಿನ",
      Critical: "ನಿರ್ಣಾಯಕ",
      Pending: "ಬಾಕಿ ಇದೆ",
    },
    admin: {
      title: "Municipal Authority Panel",
      subtitle: "Manage reports, assign departments, and track resolution metrics.",
      menu: {
        dashboard: "Dashboard",
        reports: "Reports",
        users: "Users",
        analytics: "Analytics",
      },
      dashboard: {
        total: "Total Reports",
        pending: "Pending",
        verified: "Verified",
        assigned: "Assigned",
        inProgress: "In Progress",
        resolved: "Resolved",
        highPriority: "High Priority",
        today: "Today's Reports",
        recentTitle: "Recent Activity",
        viewAll: "View All Reports",
        quickActions: "Quick Links",
        manageReports: "Manage Reports",
        manageUsers: "Manage Users",
        viewAnalytics: "View Analytics",
      },
      reports: {
        search: "Search reports...",
        allStatuses: "All Statuses",
        allCategories: "All Categories",
        allDepartments: "All Departments",
        allPriorities: "All Priorities",
        newest: "Newest First",
        oldest: "Oldest First",
        showing: "Showing",
        of: "of",
        results: "results",
        empty: "No reports found",
        emptyHint: "Try adjusting your filters or search terms.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources: {
    en,
    hi,
    gu,
    mr,
    bn,
    ta,
    te,
    kn,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

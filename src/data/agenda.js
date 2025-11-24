/**
 * Agenda Data
 *
 * Contains all conference agenda sections and items
 */

import { asset } from "../config.js";

export const agendaSections = [
  {
    id: "foundations",
    title: "FOUNDATIONS",
    timeRange: "08:30 — 10:40",
    items: [
      {
        id: "breakfast",
        time: "08:30",
        category: "",
        title: "EXECUTIVE BREAKFAST",
        badge: "INVITE ONLY",
        speakers: [],
        icon: asset("/images/break-fest.svg"),
        disableHover: true,
      },
      {
        id: "1",
        time: "09:15",
        category: "FOUNDATIONS",
        title: "CONFERENCE WELCOME AND OPENAPI IN THE AGE OF AI",
        speakers: [
          {
            name: "ERIK WILDE",
            job: "HEAD OF ENTERPRISE STRATEGY",
            company: "JENTIC",
            avatar: asset("/images/speakers/Erik.jpg"),
            linkedin: "https://www.linkedin.com/in/erikwilde/",
          },
        ],
      },
      {
        id: "2",
        time: "09:45",
        category: "FOUNDATIONS",
        title: "WHAT'S NEW IN OPENAPI 3.2",
        speakers: [
          {
            name: "LORNA MITCHELL",
            job: "API ARCHITECT",
            company: "TM FORUM",
            avatar: asset("/images/speakers/Lorna.jpg"),
            linkedin: "https://www.linkedin.com/in/lornajane/",
          },
        ],
      },
      {
        id: "3",
        time: "10:15",
        category: "FOUNDATIONS",
        title: "DATA CONTRACTS: TREATING DATA AS APIS",
        speakers: [
          {
            name: "DR. SIMON HARRER",
            job: "CO-FOUNDER AND CEO",
            company: "ENTROPY DATA",
            avatar: asset("/images/speakers/Simon.jpg"),
            linkedin: "https://www.linkedin.com/in/simonharrer/",
          },
        ],
      },
    ],
  },
  {
    id: "practices",
    title: "PRACTICES",
    timeRange: "11:00 — 12:55",
    items: [
      {
        id: "4",
        time: "11:00",
        category: "PRACTICES",
        title:
          "FROM ZERO TO SPEC-HERO: ELIMINATING LEAN WASTES WHEN ADOPTING OPENAPI",
        speakers: [
          {
            name: "MARJUKKA NIINIOJA",
            job: "FOUNDING PARTNER",
            company: "OSAANGO",
            avatar: asset("/images/speakers/Marjukka.jpg"),
            linkedin: "https://www.linkedin.com/in/marjukkaniinioja/",
          },
        ],
      },
      {
        id: "5",
        time: "11:30",
        category: "PRACTICES",
        title:
          "HOW THE DUTCH GOVERNMENT USES AN OPENAPI-FIRST APPROACH TO LEVERAGE DEVELOPER EXPERIENCE",
        speakers: [
          {
            name: "DIMITRI VAN HEES",
            company: "GOVERNMENT OF THE NETHERLANDS",
            avatar: asset("/images/speakers/Dimitri.jpg"),
            linkedin: "https://www.linkedin.com/in/dimitrivanhees/",
          },
        ],
      },
      {
        id: "6",
        time: "12:00",
        category: "PRACTICES",
        title:
          "FROM REST TO EVENTS: API WORKFLOW TESTING AND MOCKING WITH A SINGLE ARAZZO SPEC",
        speakers: [
          {
            name: "NARESH JAIN",
            job: "FOUNDER, CEO",
            company: "SPECMATIC",
            avatar: asset("/images/speakers/Naresh.jpg"),
            linkedin: "https://www.linkedin.com/in/nareshjain/",
          },
        ],
      },

      {
        id: "7",
        time: "12:30",
        category: "PRACTICES",
        title: "YOU MAY HAVE OPENAPI, BUT IS IT AI-READY?",
        speakers: [
          {
            name: "FRANK KILCOMMINS",
            job: "HEAD OF ENTERPRISE ARCHITECTURE",
            company: "JENTIC",
            avatar: asset("/images/speakers/Frank.jpg"),
            linkedin: "https://www.linkedin.com/in/frank-kilcommins",
          },
        ],
      },
    ],
  },
  {
    id: "applications",
    title: "APPLICATIONS",
    timeRange: "14:00 — 15:25",
    items: [
      {
        id: "8",
        time: "14:00",
        category: "APPLICATIONS",
        title: "WHAT'S ALL THE FUSS ABOUT TYPESPEC?",
        speakers: [
          {
            name: "CHRIS WOOD",
            job: "PRINCIPAL ARCHITECT",
            company: "OZONE API",
            avatar: asset("/images/speakers/Chris.jpg"),
            linkedin: "https://www.linkedin.com/in/sensiblewood/",
          },
        ],
      },
      {
        id: "9",
        time: "14:30",
        category: "APPLICATIONS",
        title:
          "CONTROL SURFACES IN OPENAPI: DESIGNING SPECS FOR TASK, PLAN, AND AGENT MODES",
        speakers: [
          {
            name: "MIGUEL QUINTERO",
            job: "TECHNICAL TRAINER",
            company: "POSTMAN",
            avatar: asset("/images/speakers/Miguel.jpg"),
            linkedin: "https://www.linkedin.com/in/miguel-quintero-a558531/",
          },
        ],
      },
      {
        id: "10",
        time: "15:00",
        category: "APPLICATIONS",
        title: "SPEC-FIRST API DESIGNS WITHOUT CODEGEN",
        speakers: [
          {
            name: "RAHUL DÉ",
            job: "VP, PLATFORM AND SITE RELIABILITY ENGINEERING, PUBLIC CLOUD",
            company: "CITI",
            avatar: asset("/images/speakers/Rahul.jpg"),
            linkedin: "https://www.linkedin.com/in/lispyclouds",
          },
        ],
      },
    ],
  },
  {
    id: "looking-glass",
    title: "THE LOOKING GLASS",
    timeRange: "15:55 — 16:50",
    items: [
      {
        id: "11",
        time: "15:55",
        category: "THE LOOKING GLASS",
        title: "OPENAPI AND SPRING-BOOT 4 - WHAT'S NEW?",
        speakers: [
          {
            name: "BADR NASS LAHSEN",
            job: "LEAD CLOUD AND SECURITY ARCHITECT",
            company: "CYBERARK",
            avatar: asset("/images/speakers/Badr.jpg"),
            linkedin: "https://www.linkedin.com/in/nasslahsen/",
          },
        ],
      },
      {
        id: "12",
        time: "16:25",
        category: "THE LOOKING GLASS",
        title: "IS OPENAPI STILL RELEVANT IN THE AGE OF AI?",
        speakers: [
          {
            name: "EMMANUEL PARASKAKIS",
            job: "FOUNDER",
            company: "LEVEL250",
            avatar: asset("/images/speakers/Emmanuel.jpg"),
            linkedin: "https://www.linkedin.com/in/emmanuelparaskakis/",
          },
        ],
      },
    ],
  },
];

import {
    BanknoteArrowUp,
    TrendingUp,
    Monitor,
    Coins,
    Clock,
    HandCoins,
} from "lucide-react";
import { BsDatabaseFillGear, BsCoin } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

export const contentItems = [
    {
        id: 1,
        badge: "Expert Insights for Confident Investing",
        heading: "Research Calls For Every Investor",
        description: [
            "Consistent accuracy of up to 90% on research calls*",
            "Identify high-potential profit opportunities daily",
            "Expertise in identifying jackpot-style market moves*",
        ],
        buttonText: "START INVESTING",
    },
    {
        id: 2,
        badge: "Expert Insights to Power Investment Decisions",
        heading: "Research Calls For Every Trade",
        description: [
            "Free Trading Calls (Demo Access)",
            "Live Buy / Sell Levels with Stop Loss",
            "SEBI-Registered Research Firm",
        ],
        buttonText: "START YOUR JOURNEY",
    },
];

export const services = [
    {
        id: 1,
        icon: BanknoteArrowUp,
        title: "Intraday Trading Calls",
        description:
            "High-accuracy intraday calls with clear entry, defined targets, stop loss, and a disciplined risk-to-reward structure.",
    },
    {
        id: 2,
        icon: TrendingUp,
        title: "Positional & Swing Calls",
        description:
            "Well-researched positional and swing trading calls designed for stress-free holding with predefined risk management.",
    },
    {
        id: 3,
        icon: Monitor,
        title: "Equity Cash & Index Calls",
        description:
            "Equity cash and index-based trading calls shared with precise entry levels, targets, and strict stop loss.",
    },
    {
        id: 4,
        icon: Coins,
        title: "Commodity & Derivative Calls",
        description:
            "Commodity and derivative trading calls backed by data-driven analysis and a strong risk-to-reward framework.",
    },
    {
        id: 5,
        icon: Clock,
        title: "Options & Strategy-Based Calls",
        description:
            "Options and strategy-based calls structured with clear execution levels, controlled risk, and defined reward potential.",
    },
    {
        id: 6,
        icon: HandCoins,
        title: "Futures Trading Calls",
        description:
            "Futures trading calls with disciplined entries, predefined targets, strict stop loss, and a focus on capital protection.",
    },
];

export const whyChooseUsData = [
    {
        icon: BsDatabaseFillGear,
        title: "Strong & Diverse Client Base",
        desc: "We serve multiple client types — beginners, professionals, and seasoned traders — across India.",
    },
    {
        icon: BsCoin,
        title: "No Confusion, No Pressure",
        desc: [
            "We keep trading simple.",
            "No complicated strategies. No emotional trading.",
        ],
    },
    {
        icon: BiSupport,
        title: " Trading Made Accessible",
        desc: "You don’t need years of experience. Our system is built to be easy, practical, and accessible for all.",
    },
];

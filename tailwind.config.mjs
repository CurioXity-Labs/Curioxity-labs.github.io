/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'deep-space': '#050505',
                'deep-space-light': '#0a0a0a',
                'electric-cyan': '#00f0ff',
                'electric-cyan-dim': '#00a0aa',
                'obsidian-purple': '#8b5cf6',
                'obsidian-purple-dim': '#6d28d9',
                'terminal-green': '#00ff88',
                'warning-amber': '#fbbf24',
                'error-red': '#ef4444',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'scan': 'scan 8s linear infinite',
                'terminal-blink': 'blink 1s step-end infinite',
                'data-stream': 'dataStream 20s linear infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.5), 0 0 10px rgba(0, 240, 255, 0.3)' },
                    '100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.8), 0 0 30px rgba(0, 240, 255, 0.5)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                dataStream: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'grid-pattern': 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)',
                'lattice-pattern': 'linear-gradient(45deg, rgba(139, 92, 246, 0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(139, 92, 246, 0.05) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(139, 92, 246, 0.05) 75%), linear-gradient(-45deg, transparent 75%, rgba(139, 92, 246, 0.05) 75%)',
            },
            backgroundSize: {
                'grid': '50px 50px',
                'lattice': '20px 20px',
            },
        },
    },
    plugins: [],
};

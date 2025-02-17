import React from 'react';

type FooterNavItem = {
    href: string;
    name: string;
};

type FooterNav = {
    label: string;
    items: FooterNavItem[];
};

const Footer = () => {
    const footerNavs: FooterNav[] = [
        {
            label: "Enlaces Rápidos",
            items: [
                {
                    href: '/nuestra-carrera',
                    name: 'Nuestra Carrera'
                },
                {
                    href: '/comunicados',
                    name: 'Comunicados'
                },
                {
                    href: '/capacitaciones',
                    name: 'Capacitaciones'
                },
                {
                    href: '/enlaces',
                    name: 'Enlaces'
                },
            ],
        },
        {
            label: "Redes Sociales",
            items: [
                {
                    href: 'https://www.facebook.com/p/Carrera-de-Enfermer%C3%ADa-UPEA-100086547786790/?_rdr',
                    name: 'Facebook'
                },
                {
                    href: 'https://youtube.com/upea',
                    name: 'YouTube'
                },
                {
                    href: 'https://tiktok.com/@upea',
                    name: 'TikTok'
                },
            ]
        },
    ]

    return (
        <footer className="bg-tertiary py-5 mt-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        footerNavs.map((item, idx) => (
                            <div key={idx}>
                                <h4 className="text-gray-200 font-semibold mb-4">
                                    {item.label}
                                </h4>
                                <ul className="space-y-4 text-gray-300">
                                    {
                                        item.items.map(((item, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={item.href}
                                                    className="duration-150 hover:text-gray-400"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        )))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                    <div>
                        <h4 className="text-gray-200 font-semibold mb-4">Carrera de Enfermería</h4>
                        <p>

                        </p>
                    </div>
                </div>
                <p className="text-gray-300 mt-2 text-center">© 2025. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
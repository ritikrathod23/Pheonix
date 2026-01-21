import React from "react";

export default function InvestmentStrategy() {
    return (
        <div className="space-y-20 pt-10">
            {/* Market Overview Section */}
            <section className="max-w-6xl mx-auto px-5">
                <h2 className="text-3xl font-semibold mb-6 text-center">Market Overview</h2>
                <div className="bg-white p-6 rounded-2xl shadow-md grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
                    <div>
                        <p className="text-gray-500">NIFTY 50</p>
                        <p className="text-xl font-semibold">22,345.20</p>
                    </div>
                    <div>
                        <p className="text-gray-500">SENSEX</p>
                        <p className="text-xl font-semibold">73,156.80</p>
                    </div>
                    <div>
                        <p className="text-gray-500">BANK NIFTY</p>
                        <p className="text-xl font-semibold">46,210.40</p>
                    </div>
                    <div>
                        <p className="text-gray-500">FINNIFTY</p>
                        <p className="text-xl font-semibold">21,045.10</p>
                    </div>
                </div>
            </section>

            {/* Investment Strategy Section */}
            <section className="max-w-6xl mx-auto px-5">
                <h2 className="text-3xl font-semibold mb-6 text-center">Our Investment Strategy</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {["Research & Analysis", "Risk Management", "Data-Driven Decisions"].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-md text-center"
                        >
                            <div className="w-10 h-10 mx-auto mb-4 bg-green-100 flex items-center justify-center rounded-xl">
                                📊
                            </div>
                            <p className="text-lg font-medium">{item}</p>
                            <p className="text-gray-500 mt-2 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team / Analysts Section */}
            <section className="max-w-6xl mx-auto px-5">
                <h2 className="text-3xl font-semibold mb-6 text-center">Meet Our Analysts</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((id) => (
                        <div
                            key={id}
                            className="bg-white p-6 rounded-2xl shadow-md text-center"
                        >
                            <div className="w-10 h-10 mx-auto mb-4 bg-blue-100 flex items-center justify-center rounded-xl">
                                👨‍💼
                            </div>
                            <p className="text-lg font-medium">Analyst {id}</p>
                            <p className="text-gray-500 mt-2 text-sm">
                                Expert in fundamental & technical research.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="max-w-5xl mx-auto px-5 text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-green-600 text-4xl">✔️</div>
                <h2 className="text-3xl font-semibold mb-3">Security & Compliance</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We follow industry-standard security protocols and research ethics to keep your investments safe
                    and data protected.
                </p>
            </section>

            {/* Newsletter Section */}
            <section className="max-w-4xl mx-auto px-5 py-10 bg-gray-100 rounded-2xl text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-4xl">📘</div>
                <h2 className="text-3xl font-semibold mb-3">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 mb-6">Get weekly market insights & stock recommendations.</p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-xl border w-full md:w-80"
                    />

                    <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700">
                        Subscribe
                    </button>
                </div>
            </section>
        </div>
    );
}
"use client";
import HeroSmallTitle from "@/components/sections/hero-small-title";
import { useState } from "react";

interface FormErrors {
    name?: string;
    email?: string;
}

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        // Limpiar error del campo al escribir
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined });
        }
    };

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "El nombre es obligatorio";
        }

        if (!form.email.trim()) {
            newErrors.email = "El email es obligatorio";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Introduce un email válido";
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // TODO: conectar con tu servicio de email (Resend, EmailJS, etc.)
        console.log(form);
        setSubmitted(true);
    };

    return (
        <div>
            <HeroSmallTitle
                image="/images/projects/image-bg.jpg"
                title="CONTACTA CON NOSOTROS"
                subtitle="We will reply faster on Instagram but we have to be professional and add this section :P"
            />
            <main className="w-full min-h-screen bg-[#dce5e5] py-20 px-6 md:px-16 lg:px-24">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        {/* Columna izquierda */}
                        <div>
                            <h1 className="text-[#E8003A] text-3xl font-bold mb-4">
                                Write to us
                            </h1>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Leave any thing you would like to share or ask :D
                            </p>
                        </div>

                        {/* Columna derecha: formulario */}
                        {submitted ? (
                            <p className="text-gray-700 text-base font-semibold pt-2">
                                ¡Mensaje enviado! Te responderemos pronto 🎉
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

                                {/* Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-gray-600 text-sm" htmlFor="name">
                                        Name*
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        className={`w-full bg-[#dce5e5] border rounded-lg px-4 py-3 text-gray-700 text-sm outline-none transition-colors
                                            ${errors.name
                                            ? "border-red-400 focus:border-red-500"
                                            : "border-gray-400 focus:border-gray-600"
                                        }`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-gray-600 text-sm" htmlFor="email">
                                        Email*
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={`w-full bg-[#dce5e5] border rounded-lg px-4 py-3 text-gray-700 text-sm outline-none transition-colors
                                            ${errors.email
                                            ? "border-red-400 focus:border-red-500"
                                            : "border-gray-400 focus:border-gray-600"
                                        }`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs">{errors.email}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-gray-600 text-sm" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={8}
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full bg-[#dce5e5] border border-gray-400 rounded-lg px-4 py-3 text-gray-700 text-sm outline-none focus:border-gray-600 transition-colors resize-none"
                                    />
                                </div>

                                <p className="text-gray-500 text-xs">
                                    * Indica los campos obligatorios
                                </p>

                                <button
                                    type="submit"
                                    className="w-full border border-[#2d3f5e] text-[#2d3f5e] rounded-full py-3 text-sm font-semibold hover:bg-[#2d3f5e] hover:text-white transition-colors duration-200"
                                >
                                    Enviar
                                </button>

                            </form>
                        )}

                    </div>
                </div>
            </main>
        </div>
    );
}
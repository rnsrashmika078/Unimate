"use client";

import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

type IntroductionProps = {
    firstName: string;
    lastName: string;
    email: string;
    university?: string;
    degreeOrProfession?: string;
    linkedin?: string;
    facebook?: string;
};

const Introduction: React.FC<IntroductionProps> = ({
    firstName,
    lastName,
    email,
    university,
    degreeOrProfession,
    linkedin,
    facebook,
}) => {
    return (
        <div className="flex justify-center items-start border-l flex-col border-[var(--border-color)] p-6 mx-auto">
            <h2 className="text-2xl font-semibold mb-2">
                {firstName} {lastName}
            </h2>
            <p className="text-gray-600 mb-2">{email}</p>
            {university && (
                <p className="text-gray-700 mb-1">🎓 {university}</p>
            )}
            {degreeOrProfession && (
                <p className="text-gray-700 mb-3">💼 {degreeOrProfession}</p>
            )}

            <div className="flex space-x-4 mt-2">
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <FaLinkedin size={24} />
                    </a>
                )}
                {facebook && (
                    <a
                        href={facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                        <FaFacebook size={24} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Introduction;

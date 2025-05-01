"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
exports.UserMapper = {
    toFullDTO(user) {
        return {
            id: user.id,
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            username: user.username,
            role: user.role,
            photo: user.photo,
            createdAt: user.createdAt,
            certificats: user.certificats?.map((cert) => ({
                id: cert.id,
                titre: cert.titre,
                dateObtention: cert.dateObtention,
                tutorial: {
                    id: cert.tutorial.id,
                    titreTuto: cert.tutorial.titreTuto,
                    formation: {
                        id: cert.tutorial.formation.id,
                        nomFormation: cert.tutorial.formation.nomFormation
                    }
                }
            })),
            enrollments: user.enrollments?.map((e) => ({
                tutorialId: e.tutorial.id,
                titreTuto: e.tutorial.titreTuto,
                formation: {
                    id: e.tutorial.formation.id,
                    nomFormation: e.tutorial.formation.nomFormation
                },
                enrolledAt: e.enrolledAt,
                progress: e.progress
            })),
            coursProgresses: user.coursProgresses?.map((cp) => ({
                coursId: cp.cours.id,
                titreCours: cp.cours.titreCours,
                completed: cp.completed,
                viewedAt: cp.viewedAt,
                tutorial: {
                    id: cp.cours.tutorial.id,
                    titreTuto: cp.cours.tutorial.titreTuto,
                    formation: {
                        id: cp.cours.tutorial.formation.id,
                        nomFormation: cp.cours.tutorial.formation.nomFormation
                    }
                }
            }))
        };
    }
};

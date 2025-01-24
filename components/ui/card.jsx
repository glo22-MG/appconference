// Définition de composants réutilisables pour une carte avec différentes sections (Header, Title, Description, Content, Footer)
// Chaque composant utilise `forwardRef` pour pouvoir recevoir une référence `ref` et appliquer des classes CSS via `cn`.

import * as React from "react"
import { cn } from "@/lib/utils"

// Composant principal "Card" avec des styles de base pour une carte
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

// Header de la carte, avec des styles pour un titre et une disposition en colonne
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

// Titre de la carte, avec des styles pour le texte
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

// Description de la carte, avec des styles pour le texte explicatif
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// Contenu de la carte, avec des styles pour la disposition interne
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

// Pied de page de la carte, avec des styles pour un alignement et une disposition horizontale
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Exportation des composants pour les utiliser ailleurs dans l'application
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

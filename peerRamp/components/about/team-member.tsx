"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export function TeamMember({ name, role, image, bio, social }: TeamMemberProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6 text-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 border-2 border-transparent"
          whileHover={{
            borderColor: "rgba(147, 51, 234, 0.5)",
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        />
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{role}</p>
        <p className="text-sm mb-6">{bio}</p>
        
        {social && (
          <div className="flex justify-center space-x-4">
            {social.twitter && (
              <motion.div whileHover={{ scale: 1.2 }}>
                <Link 
                  href={social.twitter}
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </motion.div>
            )}
            {social.github && (
              <motion.div whileHover={{ scale: 1.2 }}>
                <Link 
                  href={social.github}
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </motion.div>
            )}
            {social.linkedin && (
              <motion.div whileHover={{ scale: 1.2 }}>
                <Link 
                  href={social.linkedin}
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </motion.div>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
}
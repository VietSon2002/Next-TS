"use client";

import { useEffect } from "react";
import { setupSwiper } from "@/core/lib/i18n/Swiper";
import ProfileCard from "./ProfileCard";
import "./style.scss";

type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

type TeamStartProps = {
  teamMembers: TeamMember[];
};

export default function TeamStart({ teamMembers }: TeamStartProps) {
  useEffect(() => {
    setupSwiper();
  }, []);

  return (
    <section className="team-start">
      <div className="container">
        <div className="swiper mySwiper-4">
          <div className="swiper-wrapper">
            {teamMembers.map((member, index) => (
              <div className="swiper-slide" key={index}>
                <ProfileCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

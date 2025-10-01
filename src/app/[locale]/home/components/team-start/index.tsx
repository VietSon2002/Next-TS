'use client';

import { setupSwiper } from '@/core/lib/i18n/Swiper';
import './style.scss';
import { useEffect } from 'react';
import ProfileCard from './ProfileCard';

const teamMembers = [
  { name: 'Salazar Myers', role: 'Manager Of Lab', avatar: '/assets/images/avatar/avatar-2.png' },
  { name: 'Jane Doe', role: 'Senior Researcher', avatar: '/assets/images/avatar/avatar-2.png' },
  { name: 'John Smith', role: 'Doctor', avatar: '/assets/images/avatar/avatar-2.png' },
  { name: 'Emily Johnson', role: 'Lab Assistant', avatar: '/assets/images/avatar/avatar-2.png' },
  { name: 'Michael Brown', role: 'AI Specialist', avatar: '/assets/images/avatar/avatar-2.png' },
  { name: 'Sarah Wilson', role: 'Technician', avatar: '/assets/images/avatar/avatar-2.png' },
];

const TeamStart = () => {
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
};

export default TeamStart;

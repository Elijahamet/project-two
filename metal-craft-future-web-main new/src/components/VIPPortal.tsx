import React, { useState } from 'react';

const VIPPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const vipBenefits = [
    { icon: 'crown', title: 'Priority Service', description: '24/7 dedicated support line' },
    { icon: 'gem', title: 'Exclusive Materials', description: 'Access to premium material library' },
    { icon: 'shield-alt', title: 'Lifetime Warranty', description: 'Extended warranty on all projects' },
    { icon: 'user-tie', title: 'Personal Manager', description: 'Dedicated project manager' },
    { icon: 'gift', title: 'VIP Rewards', description: 'Exclusive discounts and offers' },
    { icon: 'calendar-check', title: 'Priority Booking', description: 'Fast-track project scheduling' }
  ];

  const recentActivity = [
    { action: 'Project Update', detail: 'Spiral Staircase - Installation 75% complete', time: '2 hours ago' },
    { action: 'Design Approved', detail: 'Security Gate Design - Final approval received', time: '1 day ago' },
    { action: 'Reward Earned', detail: '500 VIP points credited to your account', time: '2 days ago' },
    { action: 'Consultation Booked', detail: 'Premium design consultation scheduled', time: '3 days ago' }
  ];

  const upcomingServices = [
    { service: 'Design Consultation', date: 'Tomorrow, 2:00 PM', type: 'Virtual' },
    { service: 'Site Inspection', date: 'Dec 20, 10:00 AM', type: 'On-site' },
    { service: 'Installation', date: 'Dec 25, 9:00 AM', type: 'Full Team' }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-muted/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="metallic-text">VIP Customer </span>
            <span className="gold-text">Portal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exclusive access to premium services, priority support, and personalized experiences
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* VIP Status Card */}
          <div className="card-metallic p-8 mb-12 bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center">
                  <i className="fas fa-crown text-white text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gold-text">Platinum VIP Member</h3>
                  <p className="text-muted-foreground">Member since 2023 • Level 5</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm">VIP Points: <strong>2,450</strong></span>
                    <span className="text-sm">Projects: <strong>12</strong></span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gold-text">$50,000</div>
                <p className="text-sm text-muted-foreground">Lifetime Value</p>
                <button className="mt-2 btn-gold px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300">
                  Redeem Points
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg">
            {['dashboard', 'projects', 'rewards', 'concierge'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gold-gradient text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'dashboard' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Quick Stats */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-metallic p-6">
                    <h4 className="font-semibold mb-4">Recent Activity</h4>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.detail}</p>
                            <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card-metallic p-6">
                    <h4 className="font-semibold mb-4">Upcoming Services</h4>
                    <div className="space-y-4">
                      {upcomingServices.map((service, index) => (
                        <div key={index} className="border-l-2 border-gold-400 pl-4">
                          <p className="text-sm font-medium">{service.service}</p>
                          <p className="text-xs text-muted-foreground">{service.date}</p>
                          <span className="text-xs bg-gold-100 text-gold-800 px-2 py-1 rounded-full">
                            {service.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-metallic p-6">
                  <h4 className="font-semibold mb-4">VIP Benefits Overview</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vipBenefits.map((benefit, index) => (
                      <div key={index} className="text-center p-4 bg-background/50 rounded-lg">
                        <i className={`fas fa-${benefit.icon} text-2xl text-gold-500 mb-2`}></i>
                        <h5 className="font-medium mb-1">{benefit.title}</h5>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <div className="card-metallic p-6">
                  <h4 className="font-semibold mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <button className="w-full btn-gold py-3 rounded-lg hover:scale-105 transition-all duration-300">
                      <i className="fas fa-phone mr-2"></i>
                      Call VIP Hotline
                    </button>
                    <button className="w-full btn-metallic py-3 rounded-lg hover:scale-105 transition-all duration-300">
                      <i className="fas fa-calendar mr-2"></i>
                      Book Consultation
                    </button>
                    <button className="w-full btn-metallic py-3 rounded-lg hover:scale-105 transition-all duration-300">
                      <i className="fas fa-download mr-2"></i>
                      Download Reports
                    </button>
                  </div>
                </div>

                <div className="card-metallic p-6">
                  <h4 className="font-semibold mb-4">Your VIP Manager</h4>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-gradient rounded-full mx-auto mb-3 flex items-center justify-center">
                      <i className="fas fa-user text-white text-xl"></i>
                    </div>
                    <h5 className="font-medium">Sarah Johnson</h5>
                    <p className="text-sm text-muted-foreground">Senior VIP Manager</p>
                    <p className="text-xs text-muted-foreground mt-2">Available 24/7 for your needs</p>
                    <button className="mt-3 btn-gold px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300">
                      Contact Sarah
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tab content placeholders */}
          {activeTab === 'projects' && (
            <div className="card-metallic p-8 text-center">
              <i className="fas fa-tools text-4xl text-gold-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-muted-foreground">Track all your projects, view progress, and manage timelines.</p>
            </div>
          )}

          {activeTab === 'rewards' && (
            <div className="card-metallic p-8 text-center">
              <i className="fas fa-gift text-4xl text-gold-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">VIP Rewards Program</h3>
              <p className="text-muted-foreground">Earn points, unlock benefits, and enjoy exclusive perks.</p>
            </div>
          )}

          {activeTab === 'concierge' && (
            <div className="card-metallic p-8 text-center">
              <i className="fas fa-concierge-bell text-4xl text-gold-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Concierge Services</h3>
              <p className="text-muted-foreground">Personal assistance for all your metal craft needs.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VIPPortal;

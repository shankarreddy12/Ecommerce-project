import React, { useState, useEffect, useContext } from 'react';
import { NotificationsContext } from '../NotificationsContext';
import './Notifications.css';
import { FiBell, FiCheck, FiCheckCircle, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Notifications = () => {
  const { 
    notifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead,
    addNotification 
  } = useContext(NotificationsContext);

  const [activeTab, setActiveTab] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'unread') return !notification.read;
    if (activeTab === 'read') return notification.read;
    return true; // 'all'
  });

  // Example: Simulate receiving a new notification
  useEffect(() => {
    const timer = setTimeout(() => {
      addNotification({
        id: Date.now(),
        title: "Limited time offer!",
        message: "Flash sale - 30% off all electronics for the next 2 hours!",
        date: new Date().toISOString().split('T')[0],
        read: false
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, [addNotification]);

  return (
    <div className="notifications-container">
      {/* Header with tabs */}
      <div className="notifications-header">
        <h1>
          <FiBell className="bell-icon" />
          Notifications
          {unreadCount > 0 && (
            <span className="unread-badge">{unreadCount}</span>
          )}
        </h1>
        
        <div className="tabs">
          <button 
            className={activeTab === 'all' ? 'active' : ''}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={activeTab === 'unread' ? 'active' : ''}
            onClick={() => setActiveTab('unread')}
          >
            Unread
          </button>
          <button 
            className={activeTab === 'read' ? 'active' : ''}
            onClick={() => setActiveTab('read')}
          >
            Read
          </button>
        </div>

        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="mark-all-read"
          >
            <FiCheckCircle /> Mark all as read
          </button>
        )}
      </div>

      {/* Notifications list with animations */}
      <div className="notifications-list">
        {filteredNotifications.length === 0 ? (
          <div className="empty-state">
            <FiBell className="empty-icon" />
            <p>No {activeTab === 'all' ? '' : activeTab} notifications</p>
          </div>
        ) : (
          <AnimatePresence>
            {filteredNotifications.map(notification => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
              >
                <div className="notification-content">
                  <div className="notification-header">
                    <h3>{notification.title}</h3>
                    <div className="notification-actions">
                      {!notification.read && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(notification.id);
                          }}
                          className="mark-read-btn"
                          title="Mark as read"
                        >
                          <FiCheck />
                        </button>
                      )}
                    </div>
                  </div>
                  <p>{notification.message}</p>
                  <div className="notification-footer">
                    <span className="date">{notification.date}</span>
                    {!notification.read && <span className="unread-indicator">New</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Notifications;
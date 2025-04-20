import { createContext, useState } from 'react';

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Welcome to our store!",
            message: "Thanks for signing up. Get 10% off your first order.",
            date: "2025-04-25",
            read: false
        },
        // ... other notifications
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsRead = (id) => {
        setNotifications(notifications.map(notification => 
            notification.id === id ? { ...notification, read: true } : notification
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(notification => ({
            ...notification,
            read: true
        })));
    };

    const addNotification = (notification) => {
        setNotifications([notification, ...notifications]);
    };

    return (
        <NotificationsContext.Provider value={{ 
            notifications, 
            unreadCount, 
            markAsRead, 
            markAllAsRead,
            addNotification
        }}>
            {children}
        </NotificationsContext.Provider>
    );
};
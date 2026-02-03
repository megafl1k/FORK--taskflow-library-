// Task management module
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();

        // NEW: task priority
        this.priority = 'medium';
    }

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
            return true;
        }
        return false;
    }

    // NEW: set task priority

setPriority(priority) {
    if (!priority || typeof priority !== 'string') {
        return false;
    }

    const validPriorities = ['low', 'medium', 'high', 'urgent'];
    if (validPriorities.includes(priority)) {
        this.priority = priority;
        return true;
    }

    return false;
}


module.exports = Task;

// Task management module
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();

        // NEW: task labels
        this.labels = [];
    }

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }

    // NEW: add label to task
    addLabel(label) {
        if (label && !this.labels.includes(label)) {
            this.labels.push(label);
        }
    }
}

module.exports = Task;

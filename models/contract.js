class Contract {
    constructor(id, projectId, clientId, freelancerId, startDate, finishDate, amount) {
        this.id = id;
        this.projectId = projectId;
        this.clientId = clientId;
        this.freelancerId = freelancerId
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.amount = amount;
    }
}

export default Contract;
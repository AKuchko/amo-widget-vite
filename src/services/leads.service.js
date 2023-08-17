import client from "../client"

export default {
    getLeads() {
        return client.get('/leads')
    }
} 
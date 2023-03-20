interface IConfiguration {
    port: number
    database: {
        host: string
        port: number
    }
}

export default IConfiguration

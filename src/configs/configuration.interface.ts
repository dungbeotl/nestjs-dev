interface IConfiguration {
    port: number
    database: {
        host: string
        port: number
    }
    security: {
        salt_rounds: number
        jwt_secret: string
        jwt_expires_in: string | number
    }
}

export default IConfiguration

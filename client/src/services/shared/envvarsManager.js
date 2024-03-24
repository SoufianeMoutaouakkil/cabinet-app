export default function (envVarName) {
    const envVarNameWithVite = "VITE_" + envVarName;
    const envVar = import.meta.env[envVarNameWithVite];
    if (!envVar) {
        throw new Error(`Environment variable ${envVarNameWithVite} is not defined.`);
    }
    return envVar;
}

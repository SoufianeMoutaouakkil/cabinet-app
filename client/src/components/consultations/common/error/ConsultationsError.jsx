import React from "react";

export default function ConsultationsError({ error }) {
    return <>{error && <div>Error: {error}</div>}</>;
}

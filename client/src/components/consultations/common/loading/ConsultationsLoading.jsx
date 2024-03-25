import React from "react";

export default function ConsultationsLoding({ loading }) {
    return <>{loading && <div>Loading...</div>}</>;
}

import React from "react"

export default function Contact(props) {
    return (
        <div className="contact-card">
            <h3>{props.name}</h3>
            <div className="info-group">
                <p>Phone Number:-</p>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <p>Email-Id:-</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
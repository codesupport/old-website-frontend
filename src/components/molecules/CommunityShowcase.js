import React from "react";
import CardGroup from "../organisms/CardGroup";
import Card from "./Card";

const posts = [
    {
        title: "Dictu by Jason_000",
        description: "Dictu is a very small, and simple dynamically typed programming language"
    }
];

function CommunityShowcase() {
    return (
        <CardGroup>
            {posts.map((post) => (
                <Card title={post.title} description={post.description}>
                    <button type="button">
                        Learn More
                    </button>
                </Card>
            ))}
        </CardGroup>
    );
}

export default CommunityShowcase;

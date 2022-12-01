import { render, screen } from "@testing-library/react";
import { BaseInfo } from "../BaseInfo";

describe("BaseInfo", () => {
    it("should render same text passed into title prop", () => {
        render(<BaseInfo title={"Title"} imageURL={"https://example.com/image.jpg"} />);
        const title = screen.getByText(/Title/i);
        expect(title).toBeInTheDocument();
    });

    it("should render image passed into imageURL prop", () => {
        render(<BaseInfo title={"Title"} imageURL={"https://example.com/image.jpg"} />);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });

    it("image should be visible to the user", () => {
        render(<BaseInfo title={"Title"} imageURL={"https://example.com/image.jpg"} />);
        const image = screen.getByRole("img");
        expect(image).toBeVisible();
    });

    it("image should have src = https://example.com/image.jpg", () => {
        render(<BaseInfo title={"Title"} imageURL={"https://example.com/image.jpg"} />);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');

    });

    it("image should not be rendered when imageURL prop is empty", () => {
        render(<BaseInfo title={"Title"} imageURL={""} />);
        const image = screen.getByRole("img");
        expect(image).not.toBeInTheDocument();
    });
});
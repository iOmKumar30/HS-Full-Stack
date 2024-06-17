const z = require("zod");

// login credentials validator
function validate1(obj) {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        country: z.literal("IN").or(z.literal("US"))
    });
    const response = schema.safeParse(obj);
    console.log(response);
}

validate1({
    email: "omkumar3012@gmail.com",
    password: "Omkumar3012",
    country: "IN"
});
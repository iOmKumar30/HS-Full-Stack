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

function validate2(obj) {
    const passwordSchema = z.string()
  .min(8, "Password must be at least 8 characters long")
  .max(15, "Password must be at most 15 characters long")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[!@#$]/, "Password must contain at least one special character out of {!, @, #, $}");

const userSchema = z.object({
  username: z.string().min(5, "Username must be at least 5 characters long").max(30, "Username must be at most 30 characters long"),
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
});
    const response = userSchema.safeParse(obj);
    console.log(response);
}

validate2({
    username: "omkumar3012",
    email: "omkumar3012@gmail.com",
    password: "omkumar3012"
});
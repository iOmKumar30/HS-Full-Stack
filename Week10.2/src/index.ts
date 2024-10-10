import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await Prisma.user.create({
    data: {
      username: username,
      password: password,
      firstname: firstName,
      lastname: lastName,
    },
  });

  console.log(res);
}
insertUser("iomkumar09", "omiiest@30", "Om", "Rath");
// suppose we want to do an operation of inserting an user but due to some reason an error occurs so although the use won't be created the autoincrement will increment the id upon the next time when we try to insert a new user the id will be one more than what it should be becuase we faced an error ONE time, so keep it in mind


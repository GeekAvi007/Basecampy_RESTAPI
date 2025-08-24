import { ApiResponse } from "../utils/api-response.js"

// const healthCheck = async (req, res, next) => {
//     try {
//         const user = await getUserFromDB()
//         res.status(200).json(
//             new ApiResponse(200, { message: "Server Is Runing!"})
//         )
//     } catch (error) {
//         next
//     }
// }


import asyncHandler from "../utils/async-handler.js"

const healthCheck = asyncHandler(async(req, res)=> {
    res.status(200).json(
        new ApiResponse(200, { message: "Server is Still Running!" })
    )
})

export { healthCheck }
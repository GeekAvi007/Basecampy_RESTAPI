export const UserRolesEnums = {
    ADMIN: "admin",
    PROJECT_ADMIN : "project-admin",
    MEMBER: "member"
}

export const AvailableRoles = Object.values(UserRolesEnums)

export const TaskStatusEnum = {
    TODO: 'todo',
    IN_PROGRESS: "in-progress",
    DONE: "done"
}

export const AvailableTaskRoles = Object.values(TaskStatusEnum)
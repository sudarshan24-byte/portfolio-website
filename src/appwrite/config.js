const config = {
    appwriteUrl: "https://cloud.appwrite.io/v1",
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID, // Appwrite Project ID
    appwriteDatabaseId: import.meta.env.VITE_DATABASE_ID, // Appwrite Database ID
    appwriteCollectionIdWeb: import.meta.env.VITE_COLLECTION_ID_WEB, // Appwrite Collection ID
    appwriteCollectionIdML: import.meta.env.VITE_COLLECTION_ID_ML, // Appwrite Database ID
    appwriteCollectionIdExperience: import.meta.env.VITE_COLLECTION_ID_EXPERIENCE, // Appwrite Database ID
    appwriteCollectionIdOtherProjects: import.meta.env.VITE_COLLECTION_ID_OTHER_PROJECTS, // Appwrite Database ID
    appwriteCollectionLeetCode: import.meta.env.VITE_COLLECTION_ID_LEETCODE, // Appwrite Database ID
    appwriteCollectionIdLeetcodeProblems: import.meta.env.VITE_COLLECTION_ID_LEETCODE_PROBLEMS, // Appwrite Database ID
    appwriteCollectionIdResume: "" // Appwrite Database ID
}


export default config
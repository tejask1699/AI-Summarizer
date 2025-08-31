# 📘 AI Summarizer & Knowledge Base

An **AI-powered document summarizer and knowledge base** that helps users upload notes, generate summaries, extract flashcards, and ask AI questions about their documents.  

Built with **React.js + Node.js (Prisma + PostgreSQL/MongoDB) + Python (FastAPI + LangChain + OpenAI API)** in a **microservices architecture**.  

---

## 📖 Project Description  

**AI Summarizer & Knowledge Base** is a full-stack application that leverages Artificial Intelligence to transform how users manage, study, and retrieve information from their documents. The system enables users to upload files such as **PDFs, Word documents, or text notes**, which are then automatically processed to generate **summaries, key insights, and flashcards** for quick review. Beyond summarization, it provides a **knowledge base powered by retrieval-augmented generation (RAG)**, allowing users to ask natural language questions and receive context-aware answers directly from their uploaded content.  

The project follows a **microservices architecture**, combining **Node.js** and **Python** for different responsibilities. The **backend API (Node.js + Express/Nest.js + Prisma + PostgreSQL/MongoDB)** handles user authentication, document metadata management, and database operations. Prisma ORM provides a clean and type-safe interface for database queries, ensuring scalability and maintainability. The backend also acts as an API gateway, connecting the frontend with the AI microservice.  

The **AI microservice**, built with **Python (FastAPI)**, integrates **LangChain and OpenAI API** to perform advanced natural language processing tasks. It handles document summarization, embedding generation, and semantic search. Embeddings are stored in a vector database such as **PostgreSQL with pgvector** or **MongoDB Atlas Vector Search**, enabling semantic document retrieval and question answering with high accuracy.  

On the **frontend**, a **React.js (or Next.js)** application offers an intuitive and responsive user interface. Users can sign up, upload documents, view AI-generated summaries, study flashcards, and interact with the knowledge base. The UI is styled with **TailwindCSS and shadcn/ui**, ensuring a modern look and smooth user experience across devices.  

This project is designed to demonstrate the **practical application of AI in education, research, and professional workflows**. It is particularly useful for students summarizing lecture notes, researchers analyzing academic papers, and professionals extracting insights from lengthy reports or meeting transcripts.  

By combining **AI-powered text processing** with a robust **full-stack architecture**, the AI Summarizer & Knowledge Base showcases expertise in **React.js, Node.js, Prisma, PostgreSQL/MongoDB, Python FastAPI, LangChain, and microservices integration**—making it both a valuable learning experience and a standout addition to any portfolio.  

---

## 🚀 Features
- 🔐 User Authentication (JWT/NextAuth)  
- 📂 Upload Documents (PDF, DOCX, TXT)  
- ✨ AI Summarization – generate concise summaries  
- 🗂️ Flashcard Generator – auto-create study cards  
- 🔍 Knowledge Base Search (RAG) – semantic Q&A  
- 📊 Dashboard – view documents, summaries, and flashcards

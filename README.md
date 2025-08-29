# programing_101
1. learning a langauge or standard function provide in langauge you focus 
2. learning a structure programing group a code to function to reduce and reuse 
3. learn how to design or create your data flow , algorithm and data structure
4. learn about concept like a oop , functional programing
5. learn how to write code to clean code or readable (pure function , avoid side effect)
6. learn how to design your application we call it name architecture 
7. learn how to test your application such as a unit test , integration test and e2e testing 
8. learn how to deploy program and build 
9. learn about network and config about port proxy 
10. learn a cicd to automation your deploy and test process 
11. learn to design system arcghitecture and use varint technologies stack and use a good or fit technology to apply your component application  

keyword 
software architecture 
quality-attributes-in-software-architecture 
design parttern 
gang og four (GOF)
clean code / clean architector 
event driven architecture
principle 
Design Patterns (Factory, Strategy, Observer, Singleton, Repository, Adapter)
Clean Code (naming, small functions, DRY, KISS, YAGNI)
Testing
Unit test, Integration test, E2E test
TDD mindset (optional)
Version Control Mastery
Git workflow (branching strategy, rebase, squash, PR review)
lazy loading, code splitting, hydration
Authentication & Authorization (JWT, OAuth2)
Secure API design (rate limiting, input validation)
Scalability, caching, load balancing
CDN, message queue basics (Kafka, RabbitMQ)


Problem-Solving & Critical Thinking
รู้จักแยก business logic ออกจาก UI/infra
สามารถอ่าน requirement ที่ไม่ชัด แล้วแตกเป็น solution ได้
Refactoring & Maintainability
ไม่แค่ “ให้มันรันได้” แต่ทำให้โค้ดอ่านง่าย ดูแลต่อได้
Debugging & Tracing
ใช้ debugger, logging, monitoring (Sentry, Datadog)
รู้วิธีหาต้นตอปัญหา ไม่ใช่เดา
Communication
เขียน spec, PR description, commit message ให้ชัด
สื่อสารกับ PM/Designer/QA ได้ดี

Core CS → DSA, OS basics, Networking
Code Quality → SOLID, Clean Architecture, Hexagonal Architecture
Testing → Jest, Vitest, Cypress, Playwright
DevOps → Docker, Kubernetes (basic), GitHub Actions
System Design → CAP theorem, Caching strategies, Horizontal vs Vertical scaling
Soft Skills → Communication, Estimation, Documentation
Career → Freelancing, Contracting, Negotiation, Personal Branding


2. System Design & Scalability

Scalability principles

Horizontal vs Vertical scaling

Load balancing, sharding, partitioning

Caching strategies

Client-side, CDN, Redis/Memcached

Database design

Normalization vs denormalization

Indexing, query optimization

High availability

Replication, failover, disaster recovery

Performance engineering

Profiling, bottleneck analysis, async job queue

🔐 3. Security & Reliability

Security

OWASP Top 10, CSRF/XSS/SQL Injection defense

Secure authentication/authorization flows (OAuth2, SSO)

Secrets management (Vault, KMS)

Reliability

Error budgets, SLO/SLA/SLI concepts

Observability (logs, metrics, traces)

Circuit breaker, retries, backoff

🚀 4. DevOps & Delivery

CI/CD pipelines → automate testing, build, deploy

Containerization → Docker, Kubernetes (basic orchestration)

Infra as Code → Terraform, Pulumi

Monitoring & Alerting → Prometheus, Grafana, Datadog

👥 5. Leadership & Impact Skills

Technical Leadership

Code review culture (mentoring through review)

Define coding standards & architecture guidelines

Project & Team Management

Agile / Scrum / Kanban (จริง ไม่ใช่แค่ buzzword)

Estimation & risk management

Communication

Translate between tech ↔ business

Write clear docs, RFCs, architecture decision records

Mentorship

Guide junior devs, delegate tasks, unblock others

🧠 6. Business & Product Awareness

Business Logic Mapping → เข้าใจว่า feature นี้แก้ปัญหาอะไรของ user

Trade-off Thinking → ตัดสินใจได้ว่า จะ optimize ด้านไหน (cost, speed, security, scalability)

Cost optimization → เลือก infra และ design ที่ balance ระหว่าง performance กับค่าใช้จ่าย

Data-driven decision → อ่าน metrics, A/B testing, analytics แล้วนำมาปรับโค้ด




frotnend :: backend 
page -> controller 
component -> service 
service/api -> repository / db 

https://github.com/Sakul/TDD



clean code 
- don't use a number value directly it is magic number use variable 
- use guard condition and store value to variable to check before enter or execute a business logic 
- write business logic

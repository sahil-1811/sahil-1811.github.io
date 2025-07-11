export const experienceData = [
    {
        id: 1,
        company: 'Kansas Department of Corrections',
        jobtitle: 'Research Analyst',
        startYear: 'Dec. 2024',
        endYear: 'June. 2025',
        duties: <ul>
                    <li> Enabled early intervention strategies for high-risk individuals by deploying predictive models (logistic regression, random forest) with over 75% accuracy, empowering case managers to prioritize support and reduce repeat offenses.</li>
                    <li> Architected and optimized end-to-end ETL pipelines using industry-standard tools to clean, transform, and load resident data from multiple databases into a centralized data warehouse, improving data accessibility and reducing latency for reporting.</li>
                    <li> Enhanced operational oversight for 50+ daily users by delivering interactive Power BI dashboards(leveraging DAX), streamlining report generation time by 60% and enabling proactive monitoring of recidivism trends across key demographics and facilities.</li>
                </ul>
    },
    {
        id: 2,
        company: 'Taylor Farms',
        jobtitle: 'Data Engineer',
        startYear: 'Nov. 2023',
        endYear: 'Nov. 2024',
        duties: <ul>
                    <p><b>Project: Fast Data Replication (Phase 2)</b></p>
                    <li> Drafted and operationalized an Azure cloud architecture blueprint for real-time data integration between On-Premise & cloud-based Dynamics 365 F&O; projected to generate an additional $15M annually.</li>
                    <li> Developed data warehouse solution on Databricks using Azure cloud services by consolidating multiple data sources including real-time streaming data; it is the foundation for data & AI strategy roadmap.</li>
                    <li> Implemented data transformation logic to perform DML operations using change tracking columns and configured a continuous DLT pipeline to automate data processing and synchronization between bronze and silver catalogs.</li>
                    <li> Developed and scheduled a job to run every 5 minutes using Apache Spark and SQL to convert three traditional stored procedures into Databricks (DBX) format, automating the export of processed data in CSV format to Digital Spaces.</li>
                    <li> Collaborated closely with business stakeholders in an Agile (Scrum) environment, identifying business needs to shape functional requirements and drive data solutions that align with business goals.</li>
                    <br></br><p><b>Project: Fast Data Replication (Phase 1)</b></p>
                    <li> Designed robust data replication processes for 18 tables containing 2B+ records, from on-premises SQL Server to Azure SQL Server using Azure Synapse Analytics.</li>
                    <li> Implemented real-time replication of change tracking data to Azure SQL Server through SSIS pipelines, ensuring continuous synchronization at 5-minute intervals for up-to-date information.</li>
                    <li> Constructed an Azure Logic App pipeline to conduct data validation between source and destination tables, facilitating automated email notifications for any identified discrepancies.</li>
                    <li> Designed an automated system (CI/CD pipeline) using GitHub Actions to manage Azure SQL Server across development, testing, and production stages.</li>
                </ul>
    },
    {
        id: 3,
        company: 'VteamLabs',
        jobtitle: 'Data Analyst',
        startYear: 'Aug. 2023',
        endYear: 'Oct. 2023',
        duties: <ul>
                    <li>Collaborated with team members to craft a fully automated ETL pipeline using Azure Data Factory to extract, transform, and load financial data from multiple sources, ensuring real-time data availability for reporting and analysis.</li>
                    <li>Led data cleaning, transformation, and visualization using Power Query, DAX, and Power BI, generating visually appealing reports and dashboards that empowered decision-making and improved user engagement by 15%.</li>
                    {/* <li> Collaborated with business analysts to understand customer needs and develop innovative solutions to enhance customer engagement and satisfaction.</li> */}
                </ul>
    },
    {
        id: 4,
        company: 'VteamLabs',
        jobtitle: 'Data Analyst Intern',
        startYear: 'Sep. 2022',
        endYear: 'Dec. 2022',
        duties: <ul>
                    <li> Assisted in the design and maintenance of data warehouse infrastructure, primarily focusing on data integration tasks.</li>
                    <li> Created 8 Power BI dashboards for corporate clients to project Return on Investment, monitor accounts growth, new customer trend and monthly revenue data resulting in 93% customer retention.</li>
                    {/* <li>Assisted in remodeling Student Assessment System by automating grading and reducing manual effort</li> */}
                    {/* <li> Generated project reports that effectively communicated data insights to management and the team members</li> */}
                </ul>
    },
    {
        id: 5,
        company: 'Trivia Softwares',
        jobtitle: 'Data Analyst Intern',
        startYear: 'Dec. 2019',
        endYear: 'Feb. 2020',
        duties: <ul>
                    <li>Analyzed 1000+ students historical data using Excel spreadsheet, identified students’ academic performance trends and created quarterly reports for the 9 instructors getting visibility into cohorts’ performance.</li>
                    <li>Presented analytics and findings of students’ and instructors’ performance using graphs to CEO and charts and identifying additional training & development opportunities for 249 underperforming students and 2 teachers.</li>
                    <li>Analyzed historical student performance data and recommended 118 high-performer students for scholarships and admission to Trivia Software’s elite program resulting in achieving 100% success rate for the group.</li>
                    {/* <li>Awarded Certificate of Excellence to appreciate my strong leadership, sound character, and passion for innovation.</li> */}
            </ul>
    },

]

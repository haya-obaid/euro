
export const CourseModules = () => {
    const modules = [
        {
          title: 'Introduction to Financial Analysis',
          items: [
            'Overview of financial analysis and its importance in decision-making.',
            'Key concepts and terminology used in financial analysis.',
          ],
        },
        {
          title: 'Financial Statement Analysis',
          items: [
            'Techniques for analyzing income statements, balance sheets, and cash flow statements.',
            'Understanding key ratios and metrics for performance evaluation.',
          ],
        },
        {
          title: 'Budgeting and Forecasting',
          items: [
            'The budgeting process: types of budgets, preparation, and implementation.',
            'Forecasting techniques: qualitative vs. quantitative methods.',
          ],
        },
        {
          title: 'Strategic Financial Planning',
          items: [
            'Aligning financial plans with organizational goals and strategies.',
            'Long-term vs. short-term financial planning considerations.',
          ],
        },
        {
          title: 'Performance Measurement and Control',
          items: [
            'Implementing control mechanisms to monitor financial performance.',
            'Key performance indicators (KPIs) for assessing success.',
          ],
        },
        {
          title: 'Risk Management in Financial Planning',
          items: [
            'Identifying potential risks in financial planning and analysis.',
            'Strategies for mitigating risks and ensuring stability.',
          ],
        },
        {
          title: 'Communicating Financial Insights',
          items: [
            'Best practices for presenting financial data to stakeholders.',
            'Techniques for effective storytelling with financial information.',
          ],
        },
        {
          title: 'Case Studies and Practical Applications',
          items: [
            ' Real-world examples illustrating successful financial analysis and planning.',
            ' Discussion of challenges faced by organizations and lessons learned',
          ],
        },
      ];
  return (
    <div className="flex flex-col gap-8">
    <h3 className="text-[18px] font-black leading-[22.63px] text-[#293352]">Course Modules</h3>
    {modules.map((module, index) => (
      <div key={index} className="flex flex-col">
        <h4 className="text-[18px] font-bold leading-[22.36px]">{module.title}</h4>
        <ul>
          {module.items.map((item, idx) => (
            <li key={idx} className="text-[18px] font-normal leading-[22.63px] text-[#000000] list-disc ml-8">
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

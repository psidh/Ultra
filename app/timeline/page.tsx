import React from 'react';

interface ScheduleEntry {
  month: string;
  [weekNumber: string]: string | string[];
}

function Timeline() {
  const months: string[] = ['November', 'December'];
  const weekNumbers: string[] = Array.from({ length: 4 }, (_, i) => `Week ${i + 1}`);

  // Mock schedule data
  const schedule: ScheduleEntry[] = [
    {
      month: 'November',
      'Week 1': ['Meeting', 'Task 1', 'Task 2'],
      'Week 2': ['Coding Session', 'Task 3'],
      'Week 3': ['Lunch', 'Task 4'],
      'Week 4': ['Workshop', 'Task 5'],
    },
    {
      month: 'December',
      'Week 1': ['Event', 'Task 6'],
      'Week 2': ['Presentation', 'Task 7'],
      'Week 3': ['Networking', 'Task 8'],
      'Week 4': ['Training', 'Task 9'],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 h-screen text-left overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-[#1c1c1c] text-white p-4 border border-[#484848]">Month/Week</th>
            {weekNumbers.map((weekNumber) => (
              <th key={weekNumber} className="bg-[#1c1c1c] text-white p-4 border border-[#484848]">
                {weekNumber}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {months.map((month, monthIndex) => (
            <tr key={month} className={monthIndex % 2 === 0 ? 'bg-[#292929] border border-[#484848]' : 'bg-[#292929] border border-[#484848] text-white'}>
              <td className="p-4">{month}</td>
              {weekNumbers.map((weekNumber) => (
                <td key={weekNumber} className="p-4 border border-[#484848]">
                  {Array.isArray(schedule.find((entry) => entry.month === month)?.[weekNumber]) ? (
                    <ul>
                      {(schedule.find((entry) => entry.month === month)?.[weekNumber] as string[]).map((task, index: number) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  ) : (
                    schedule.find((entry) => entry.month === month)?.[weekNumber] || '-'
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timeline;

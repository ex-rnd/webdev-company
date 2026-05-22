import React from 'react';

interface TeamMemberProps {
  params: {
    id: string;
  }
}

const TeamMemberDetails = async ({params}: TeamMemberProps) => {

  const id = (await params).id;
  return (
    <div className='text-2xl'>
      TeamMemberDetails {id}
    </div>
  )
}

export default TeamMemberDetails;

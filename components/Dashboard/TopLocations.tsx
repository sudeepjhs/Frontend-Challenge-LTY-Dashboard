import { LocationVisitorData } from '@/data/dashboardData'
import { dummyLocationVistorData } from '@/data/dummy/dashboardDummyData'
import { Button, Divider } from '@nextui-org/react'
import React, { HTMLAttributes } from 'react'
import Box from '../Container/Box'
import GrowthIndicator from '../Misc/GrowthIndicator'

interface LocationVisitorCardProps extends HTMLAttributes<HTMLDivElement> {
    locationName: string,
    NoOfVisitor: string | number,
    percentage: number
}

const LocationVisitorCard: React.FC<LocationVisitorCardProps> = ({ locationName, NoOfVisitor, percentage }) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between text-sm items-center py-1'>
                <p>{locationName}</p>
                <div className='flex flex-col'>
                    <p>{NoOfVisitor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> {/* To add commas to numbers representing thousands, lakhs, etc */}
                    <GrowthIndicator className='justify-end' percentage={percentage} iconSize={8} fontSize='text-[10px]' />
                </div>
            </div>
            <Divider />
        </div>
    )
}

interface VisitorsPerDayProps {
    visitorsData?: LocationVisitorData[],
}

const TopLocations: React.FC<VisitorsPerDayProps> = ({ visitorsData }) => {

    if (!visitorsData || !visitorsData.length) visitorsData = dummyLocationVistorData;

    return (
        <Box className='py-3 px-5'>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center'>
                    <h6>Top Locations</h6>
                    <Button variant='bordered' color='secondary' size='sm'>See More</Button>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between text-content3 text-sm'>
                            <h4>Country</h4>
                            <h4>Visitors</h4>
                        </div>
                        <Divider />
                    </div>
                    {visitorsData.map((data, i) =>
                        <LocationVisitorCard key={data.location + "_" + i} NoOfVisitor={data.noOfVisitor} locationName={data.location} percentage={data.incPer} />
                    )}
                </div>
            </div>
        </Box>
    )
}

export default TopLocations
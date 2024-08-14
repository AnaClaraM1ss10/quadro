"use client"
import RouteSettings from "@/components/settingsComponents/routeSettings"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function collaborative() {
    return (
        <>
            <div className="flex flex-col items-start justify-start mt-[100px] md:flex-row md:items-start p-4 gap-8">
                <RouteSettings />
                <div className="flex items-center justify-center w-[800px]">
                    <Card className="w-full p-6">
                        <CardHeader>
                            <CardTitle>Ambiente colaborativo</CardTitle>
                            <CardDescription>Configure um só lugar para todos usar</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">

                        </CardContent>
                        <CardFooter className="flex items-center justify-end">
                            <Button>Atualizar</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}
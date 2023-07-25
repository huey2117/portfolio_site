<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class TempCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'temp:command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Temporary Command for testing random shit';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        echo env('APP_ENV');
        echo env('DB_HOST');
    }
}

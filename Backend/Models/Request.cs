﻿namespace lizingo_sistema.Models
{
    public class Request
    {
        public Request() { }

        public Request(int price, int timeSpan, int downPayment)
        {
            Price = price;
            TimeSpan = timeSpan;
            DownPayment = downPayment;
        }

        public int RequestId { get; set; }
        public RequestStatus Status { get; set; } = RequestStatus.InProgress; // default value
        public int Price { get; set; }
        public int TimeSpan { get; set; }
        public int DownPayment { get; set; }
    }
}

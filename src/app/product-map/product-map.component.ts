import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './product-map.component.html',
  styleUrls: ['./product-map.component.css']
})
export class ProductMapComponent {
  @ViewChild("myCanvas", {static: true}) canvasRef: ElementRef;
  private ctx: CanvasRenderingContext2D;

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvasRef.nativeElement.width = window.innerWidth;
    this.canvasRef.nativeElement.height = window.innerHeight;
    this.drawBorder();
    this.drawPoint();
  }

  drawPoint() {
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 30, 0, 2 * Math.PI);
    this.ctx.fillStyle = "darkred";
    this.ctx.fill();
  }

  drawBorder() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(200, 0);
    this.ctx.lineTo(200, 200);
    this.ctx.lineTo(0, 200);
    this.ctx.lineTo(0, 0);
    this.ctx.stroke();
  }
}
